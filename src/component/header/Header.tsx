import * as React from 'react';
import style from './Header.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <h1>Redibin WebEditor</h1>
            <button type="button">login</button>
        </header>
    );
}

export default Header;