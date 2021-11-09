import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {

  let dialogItemData = [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Maksym' },
    { id: 3, name: 'Vitalii' },
    { id: 4, name: 'Oksana' }
  ];

  let messageItemData = [
    { id: 1, text: 'Hi, everyone!' },
    { id: 1, text: 'What\'s wrong?' },
    { id: 1, text: 'All ok!' }
  ];

  let postItemData = [
    { id: 1, message: 'Hi, evetyone!!', likes: 15 },
    { id: 2, message: 'Bye bye all', likes: 20 }
  ];

  
  let sidebarItemData = [
    { link: '/profile', text: 'Profile' },
    { link: '/dialogs', text: 'Dialogs' },
    { link: '/news', text: 'News' },
    { link: '/music', text: 'Music' },
    { link: '/settings', text: 'Settings' }
];




  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar sidebarData={sidebarItemData}/>
        <Footer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' >
              <Route path='' element={<Dialogs dialogData={dialogItemData} messages={messageItemData}/>} />
              <Route path=':message' element={<Dialogs />} />

            </Route>
            <Route path='/profile' element={<Profile postData={postItemData}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
