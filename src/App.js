import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SidebarReduxContainer from './components/Sidebar/SidebarReduxContainer';
import DialogsReduxContainer from './components/Dialogs/DialogsReduxContainer';
import ProfileReduxContainer from './components/Profile/ProfileReduxContainer';
import UsersContainer from './components/Users/UsersContainer';
import Dialogs from './components/Dialogs/Dialogs';
import HeaderReduxContainer from './components/Header/HeaderReduxContainer';
import LoginReduxContainer from './components/Login/LoginReduxContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderReduxContainer />
      <SidebarReduxContainer />
      <Footer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' >
            <Route path='' element={<DialogsReduxContainer />} />
            <Route path=':message' element={<Dialogs />} />
          </Route>
          <Route path='/profile'>
            <Route path='' element={<ProfileReduxContainer />} />
            <Route path=':userId' element={<ProfileReduxContainer />} />
          </Route>
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginReduxContainer />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
