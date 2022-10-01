import './single.scss';
import {Sidebar,Navbar,Chart,Tables} from '../../components'

export const Single=()=>{
    return(
        <div className="single">
            <Sidebar/>
            <div className="single__container">
                <Navbar />
                <div className="single__top">
                    <div className="single__left">
                        <div className="single__edit-btn">Edit</div>
                        <h1 className="single__title">Information</h1>
                        <div className="single__item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="single__item-img"
                            />
                            <div className="single__details">
                                <h1 className="single__deatails-title">Jane Doe</h1>
                                <div className="single__details-item">
                                    <span className="single__detail-key">Email:</span>
                                    <span className="single__details-value">janedoe@gmail.com</span>
                                </div>
                                <div className="single__details-item">
                                    <span className="single__detail-key">Phone:</span>
                                    <span className="single__details-value">+1 2345 67 89</span>
                                </div>
                                <div className="single__details-item">
                                    <span className="single__detail-key">Address:</span>
                                    <span className="single__details-value">
                                        Elton St. 234 Garden Yd. NewYork
                                    </span>
                                </div>
                                <div className="single__details-item">
                                    <span className="single__detail-key">Country:</span>
                                    <span className="single__details-value">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single__right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="single__bottom">
                    <h1 className="single__title">Last Transactions</h1>
                    <Tables/>
                </div>
            </div>
        </div>
    )
}