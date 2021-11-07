import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/SIdebar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Footer />
      <div className='app-wrapper-content'>
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div >
  );
}

export default App;
