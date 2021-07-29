import * as React from 'react';
import style from './Header.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>Redibin WebEditor</h1>
            <button type="button" className={style.login}>login</button>
        </header>
    );
}

export default Header;