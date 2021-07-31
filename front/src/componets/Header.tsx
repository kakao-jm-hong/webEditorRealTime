import React from 'react';
import style from './Header.module.scss';

const Header = ()=> {
    return (
        <header className={style.header}>
            <h1 className={style.title}>Web RealTime Editor</h1>
            <button type="button" className={style.login}>Login</button>
            <button type="button" aria-label="설정" className={style.setting}></button>
        </header>
    );
}

export default Header;