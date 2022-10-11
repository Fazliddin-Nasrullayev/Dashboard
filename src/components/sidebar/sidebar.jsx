import './sidebar.scss';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Sidebar=()=>{
    const { dispatch } = useContext(DarkModeContext);
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="sidebar__logo">Dashboard</span>
                </Link>
            </div>
            <hr />
            <div className="sidebar__center">
                <ul className='sidebar__list'>
                    <p className="sidebar__title">MAIN</p>
                    <li className='sidebar__item'>
                        <DashboardIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Dashboard</span>
                    </li>
                    <p className="sidebar__title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li className='sidebar__item'>
                        <PersonOutlineIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li className='sidebar__item'>
                        <StoreIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Products</span>
                        </li>
                    </Link>
                    <li className='sidebar__item'>
                        <CreditCardIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Orders</span>
                    </li>
                    <li className='sidebar__item'>
                        <LocalShippingIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Delivery</span>
                    </li>
                    <p className="sidebar__title">USEFUL</p>
                    <li className='sidebar__item'>
                        <InsertChartIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Stats</span>
                    </li>
                    <li className='sidebar__item'>
                        <NotificationsNoneIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Notifications</span>
                    </li>
                    <p className="sidebar__title">SERVICE</p>
                    <li className='sidebar__item'>
                        <SettingsSystemDaydreamOutlinedIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Systm Health</span>
                    </li>
                    <li className='sidebar__item'>
                        <PsychologyOutlinedIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Logs</span>
                    </li>
                    <li className='sidebar__item'>
                        <SettingsApplicationsIcon className="sidebar__icon" />      
                        <span className='sidebar__span'>Settings</span>
                    </li>
                    <p className="sidebar__title">USER</p>
                    <li className='sidebar__item'>
                        <AccountCircleOutlinedIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Profile</span>
                    </li>
                    <li className='sidebar__item'>
                        <ExitToAppIcon className="sidebar__icon" />
                        <span className='sidebar__span'>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__color-options"  onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="sidebar__color-options" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}