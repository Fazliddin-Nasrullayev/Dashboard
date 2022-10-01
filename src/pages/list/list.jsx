import { Navbar, Sidebar,TableData } from '../../components';
import './list.scss';

export const List=()=>{
    return(
        <div className="list">
            <Sidebar/>
            <div className="list__container">
                <Navbar/>
                <TableData/>
            </div>
        </div>
    )
}