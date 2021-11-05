import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/SIdebar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>   
      <Header />
      <Sidebar />
      <Profile />
      <Footer />   
    </div>
  );
}

export default App;
