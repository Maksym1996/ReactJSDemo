import NavLink from '../../NavLink/NavLink';
import s from './SidebarItem.module.css';

const SidebarItem = (props) => {

    return (
        <div className={s.sidebar_item}>
            <NavLink to={props.link} activeClassName={s.activeLink}>{props.text}</NavLink>
        </div>
    )
}

export default SidebarItem;