import NavLink from '../NavLink/NavLink';
import s from './Sidebar.module.css';

const Sidebar_Item = (props) => {

    return (
        <div className={s.item}>
            <NavLink to={props.link} activeClassName={s.activeLink}>{props.text}</NavLink>
        </div>
    )
}

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