import {BrowserRouter, HashRouter, useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TopAppBar from "./components/NavBar/TopAppBar/TopAppBar";
import ToolBar from "./components/NavBar/ToolBar/ToolBar";
import {Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useRef, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import './styles/style.css'
import {fetchBrands, fetchDevices, fetchTypes} from "./http/deviceAPI";
import {SHOP_ROUTE} from "./utils/consts";
import {fetchBasket} from "./http/basketAPI";
import jwt_decode from "jwt-decode";


const App = observer(() => {
        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true)
        const {device} = useContext(Context)
        const token = localStorage.getItem('token')

        useEffect(() => {
            fetchTypes().then(data => device.setTypes(data))
            fetchBrands().then(data => device.setBrands(data))
            fetchDevices(null, null, null, null, 16).then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
        }, [])

        useEffect(() => {
            fetchDevices(device.type, null, device.page, device.gender, 16).then(data => {
                device.setDevices(data.rows)
                device.setTotalCount(data.count)
            })
        }, [device.gender, device.type, device.page])


        useEffect(() => {
            window.scrollTo({
                top: 0
            })
        }, [device.page])

        useEffect(() => {
            setTimeout(() => {
                check().then(data => {
                    user.setUser(true)
                    user.setIsAuth(true)
                }).finally(() => {
                    setLoading(false)
                })
            }, 400)
        }, [])

        //
        return (
            <BrowserRouter>
                {loading ? <h1 className='loading'>Loading...</h1> :
                    <div>
                        <TopAppBar/>
                        <ToolBar/>
                        <AppRouter/>
                    </div>}
            </BrowserRouter>
        );
    })
;

export default App;
