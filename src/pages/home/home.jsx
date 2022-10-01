import { Chart, Feature, Navbar, Sidebar, Tables, Widget } from '../../components';
import './home.scss';

export const Home=()=>{
    return(
        <div className="home">
            <Sidebar/>
            <div className="home__container">
                <Navbar/>
                <div className="home__widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="home__charts">
                    <Feature/>
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
                </div>
                <div className="home__list-container">
                    <div className="home__list-title">Latest Transaction</div>
                    <Tables/>
                </div>
            </div>
        </div>
    )
}