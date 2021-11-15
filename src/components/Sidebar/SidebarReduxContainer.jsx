import Sidebar from './Sidebar';

const SidebarContainer = (props) => {
    let sidebarItems = props.store.getState().sidebarComponent.sidebarData;

    return (
        <Sidebar sidebarItems={sidebarItems}/>
    );
}

export default SidebarContainer;