import './navbar.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


export const Navbar=()=>{
    const { dispatch } = useContext(DarkModeContext);

    return(
        <div className="navbar">
            <div className="navbar__wrapper">
                <div className="navbar__search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="navbar__items">
                    <div className="navbar__item">
                        <LanguageOutlinedIcon className="navbar__icon" />
                        English
                    </div>
                    <div className="navbar__item">
                        <DarkModeOutlinedIcon
                        className="navbar__icon"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className="navbar__item">
                        <FullscreenExitOutlinedIcon className="navbar__icon" />
                    </div>
                    <div className="navbar__item">
                        <NotificationsNoneOutlinedIcon className="navbar__icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="navbar__item">
                        <ChatBubbleOutlineOutlinedIcon className="navbar__icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="navbar__item">
                        <ListOutlinedIcon className="navbar__icon" />
                    </div>
                    <div className="navbar__item">
                        <img
                        src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=" bu yerda userning rasmi bor"
                        className="navbar__avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}