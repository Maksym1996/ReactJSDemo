import NavLink from './../../util/NavLink/NavLink';
import s from './Sidebar.module.css';
import Sidebar_Item from './Sidebar_Item/Sidebar_Item';

const Sidebar = (props) => {
    return (
        <nav className={s.sidebar}>
            <Sidebar_Item link='/profile' text='Profile' />
            <Sidebar_Item link='/dialogs' text='Dialogs' />
            <Sidebar_Item link='/news' text='News' />
            <Sidebar_Item link='/music' text='Music' />
            <Sidebar_Item link='/settings' text='Settings' />
        </nav>
    );
}

export default Sidebar;