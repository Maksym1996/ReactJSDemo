import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Profile from './components/Profile';

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
