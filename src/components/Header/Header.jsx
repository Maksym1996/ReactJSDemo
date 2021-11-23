import s from './Header.module.css';
import LoginBlock from './LoginBlock/LoginBlock';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://mundstuck.com.ua/wp-content/uploads/2020/09/m_white.png' alt='Mundshtuk Label' />
            <LoginBlock {...props}/>
        </header>
    );
}

export default Header;