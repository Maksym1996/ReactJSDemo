import s from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) => {
    let sidebarItems = props.sidebarItems
        .map(item => <SidebarItem key={item.link} link={item.link} text={item.text} />)

    return (
        <nav className={s.sidebar}>
            {sidebarItems}
        </nav>
    );
}

export default Sidebar;