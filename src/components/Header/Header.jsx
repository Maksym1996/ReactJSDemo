import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://mundstuck.com.ua/wp-content/uploads/2020/09/m_white.png' alt='Mundshtuk Label'/>
        </header>
    );
}

export default Header;