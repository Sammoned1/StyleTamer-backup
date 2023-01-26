import React, {useContext, useMemo} from 'react';
import classes from './FilterList.module.css'
import PriceFilter from "../UI/PriceFilter/PriceFilter";
import FilterRaw from "../UI/FilterRaw/FilterRaw";
import {useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import MyButton from "../UI/Buttons/MyButton/MyButton";


const FilterList = observer(({active, setActive}) => {
    const {device} = useContext(Context)

    const [expandedFirst, setExpandedFirst] = useState(false)
    const [expandedSecond, setExpandedSecond] = useState(false)

    const expandFirst = (gender) => {
        if (!expandedFirst) {
            setExpandedFirst(true)
            device.setSelectedGender(gender)
        } else {
            if (device.selectedGender.id === gender.id || !device.selectedGender.id) {
                if (device.selectedType.id) {
                    device.setSelectedType({})
                }
                if (device.selectedOther.id) {
                    device.setSelectedOther({})
                }
                setExpandedFirst(false)
                setExpandedSecond(false)
            } else {
                selectAnother(gender)
                setExpandedSecond(false)
            }
        }
    }

    const chooseFirst = (gender) => {
        if (!device.selectedGender.id) {
            device.setSelectedGender(gender)
        } else {
            if (device.selectedGender.id === gender.id) {
                device.setSelectedGender({})
            } else {
                device.setSelectedGender(gender)
            }
        }
    }

    const expandSecond = (type) => {
        if (!expandedSecond) {
            setExpandedSecond(true)
            device.setSelectedType(type)
        } else {
            if (device.selectedType.id === type.id || !device.selectedType.id) {
                setExpandedSecond(false)
            } else {
                device.setSelectedType(type)
            }
            if (device.selectedOther.id){
                device.setSelectedOther({})
            }
        }
    }

    const chooseSecond = (type) => {
        if (!device.selectedType.id) {
            device.setSelectedType(type)
        } else {
            if (device.selectedType.id === type.id) {
                device.setSelectedType({})
                setExpandedSecond(false)
            } else {
                device.setSelectedType(type)
                device.setSelectedOther({})
            }
        }
    }

    const chooseThird = (other) => {
        if (!device.selectedOther.id) {
            device.setSelectedOther(other)
        } else {
            if (device.selectedOther.id === other.id) {
                device.setSelectedOther({})
            } else {
                device.setSelectedOther(other)
            }
        }
    }

    const removeAllSelected = () => {
        if (device.selectedGender.id) {
            device.setSelectedGender({})
        }
        if (device.selectedType.id) {
            device.setSelectedType({})
        }
        if (device.selectedOther.id) {
            device.setSelectedOther({})
        }
    }

    const selectAnother = (gender) => {
        if (device.selectedType.id) {
            device.setSelectedType({})
        }
        if (device.selectedOther.id){
            device.setSelectedOther({})
        }
        device.setSelectedGender(gender)
    }

    return (
        <div className={active ? classes.modal + ' ' + classes.active : classes.modal}
             onClick={() => {
                 setActive(false)
                 setExpandedFirst(false)
                 setExpandedSecond(false)
                 removeAllSelected()
             }}
        >
            <div className={!expandedFirst
                ? active ? classes.active + ' ' + classes.filterModal : classes.filterModal
                : !expandedSecond
                    ? active ? classes.active + ' ' + classes.filterModal + ' ' + classes.firstClicked : classes.filterModal + ' ' + classes.firstClicked
                    : active ? classes.active + ' ' + classes.filterModal + ' ' + classes.secondClicked : classes.filterModal + ' ' + classes.secondClicked}
                 onClick={e => e.stopPropagation()}
            >
                <div
                    className={classes.filterList}>
                    <div className={classes.firstSection}>
                        <PriceFilter active={active}/>
                        {device.genders.map((gender) => // Отрисовка первого блока
                            <FilterRaw key={gender.id}
                                       expand={expandFirst}
                                       choose={chooseFirst}
                                       leftImage={gender.icon}
                                       flag={true}
                                       selected={gender.id === device.selectedGender.id}
                                       item={gender}
                            />
                        )}
                    </div>
                    {!expandedFirst // Отрисовка второго блока
                        ? null
                        : <div className={classes.secondSection}>
                            {device.filterTypes.map((type) =>
                                <FilterRaw key={type.id}
                                           choose={chooseSecond}
                                           expand={expandSecond}
                                           selected={type.id === device.selectedType.id}
                                           item={type}
                                           leftImage={type.icon}
                                           flag={true}
                                />
                            )}
                        </div>
                    }
                    {!(expandedSecond) // Отрисовка Третего блока
                        ? null
                        : <div className={classes.thirdSection}>
                            {device.selectedType.list.map((listItem) =>
                                <FilterRaw
                                    choose={chooseThird}
                                    key={listItem.id}
                                    item={listItem}
                                    selected={listItem.id === device.selectedOther.id}
                                    leftImage={listItem.icon}
                                />
                            )}
                        </div>}
                    <div className={classes.filterBtns}>
                        <MyButton
                            title={'Сбросить'}
                            style={{
                                fontSize: '18px',
                                width: '160px'
                            }}/>
                        <MyButton
                            title={'Сохранить'}
                            style={{
                                fontSize: '18px',
                                width: '160px'
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default FilterList;