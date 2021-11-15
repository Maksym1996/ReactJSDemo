import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarReduxContainer';
import DialogsContainer from './components/Dialogs/DialogsReduxContainer';
import ProfileContainer from './components/Profile/ProfileReduxContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <SidebarContainer store={props.store} />
      <Footer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' >
            <Route path='' element={<DialogsContainer store={props.store} />} />
            <Route path=':message' element={<Dialogs />} />
          </Route>
          <Route path='/profile' element={<ProfileContainer store={props.store} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
