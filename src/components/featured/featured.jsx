import './featured.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export const Feature=()=>{
    return(
        <div className="featured">
            <div className="featured__top">
                <h1 className="featured__title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="featured__bottom">
                <div className="featured__chart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="featured__bottom-title">Total sales made today</p>
                <p className="featured__bottom-amount">$420</p>
                <p className="featured__bottom-text">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="featured__summary">
                    <div className="feature__item">
                        <div className="featured__item-title">Target</div>
                        <div className="featured__item-result negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="featured__result-amount">$12.4k</div>
                        </div>
                    </div>
                    <div className="feature__item">
                        <div className="featured__item-title">Last Week</div>
                        <div className="featured__item-result positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="featured__result-amount">$12.4k</div>
                        </div>
                    </div>
                    <div className="feature__item">
                        <div className="featured__item-title">Last Month</div>
                        <div className="featured__item-result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                            <div className="featured__result-amount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}