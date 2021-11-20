import Sidebar from './Sidebar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        sidebarItems: state.sidebarComponent.sidebarData
    }
}

let mapDispatchToProps = {
}

const SidebarReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarReduxContainer;