import React from 'react';
import style from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { setLogin } from "../redux/actions/loginActions";

const Header = ()=> {
    const dispatch = useDispatch();
    
    const onLogin = () => {
        dispatch(setLogin(true));
    };

    return (
        <header className={style.header}>
            <h1 className={style.title}>Web RealTime Editor</h1>
            <button type="button" className={style.login} onClick={onLogin}>Login</button>
            <button type="button" aria-label="설정 더보기" className={style.setting}></button>
        </header>
    );
}

export default Header;