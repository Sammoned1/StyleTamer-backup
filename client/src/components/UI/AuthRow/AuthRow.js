import React, {useState} from 'react';

const AuthRow = ({rowClass, leftIcon, rightIcon, active, eyeFlag, setEyeFlag, element}) => {

    return (
        <div>
            <div className={rowClass}>
                <div className={leftIcon}></div>
                {element}
                <div className={eyeFlag ? rightIcon + ' ' + active : rightIcon} onClick={() => {
                    !eyeFlag ? setEyeFlag(true) : setEyeFlag(false)
                }}></div>
            </div>
        </div>
    );
};

export default AuthRow;