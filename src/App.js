import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar
        sidebarData={props.state.sidebarComponent.sidebarData} />
      <Footer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' >
            <Route path='' element={<Dialogs
              dialogData={props.state.dialogComponent.dialogData}
              messages={props.state.dialogComponent.messageData}
              currentMessage={props.state.dialogComponent.currentMessage}
              dispatch={props.dispatch} />} />
            <Route path=':message' element={<Dialogs />} />
          </Route>
          <Route path='/profile' element={<Profile
            profileData={props.state.profileComponent}
            dispatch={props.dispatch} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
