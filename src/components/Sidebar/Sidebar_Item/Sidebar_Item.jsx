import NavLink from '../../../util/NavLink/NavLink';

import s from './Sidebar_Item.module.css';

const Sidebar_Item = (props) => {

    return (
        <div className={s.item}>
            <NavLink to={props.link} activeClassName={s.activeLink}>{props.text}</NavLink>
        </div>
    )
}

export default Sidebar_Item;