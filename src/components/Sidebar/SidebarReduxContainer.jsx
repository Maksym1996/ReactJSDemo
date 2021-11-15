import Context from '../../Context';
import Sidebar from './Sidebar';

const SidebarContainer = (props) => {
    

    return (
        <Context.Consumer>
        {
            (store) => {
                let sidebarItems = store.getState().sidebarComponent.sidebarData;
               
                return (<Sidebar sidebarItems={sidebarItems} />)
            }
        }
        </Context.Consumer>
        
    );
}

export default SidebarContainer;