import { Link } from "react-router-dom";
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <nav className={s.sidebar}>
            <div className={s.item}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={s.item}>
                <Link to="/dialogs">Dialogs</Link>
            </div>
            <div className={s.item}>
                <Link to="/news">News</Link>
            </div>
            <div className={s.item}>
                <Link to="/music">Music</Link>
            </div>
            <div className={s.item}>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    );
}

export default Sidebar;