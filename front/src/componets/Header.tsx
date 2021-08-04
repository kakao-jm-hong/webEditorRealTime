import React from 'react';
import style from './Header.module.scss';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../redux/actions/loginActions";
import { RootState } from '../redux/type';

type Pprops = {
    className?: string;
}

const Header = ({className}:Pprops)=> {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => ({user: state.login.user }));
    const onLogin = () => {
        dispatch(setLogin(true));
    };

    return (
        <header className={classnames(style.header, className)}>
            <h1 className={style.title}>RT Editor</h1>
            <button type="button" className={style.login} onClick={onLogin}>Login</button>
            {/* <button type="button" aria-label="설정 더보기" className={style.setting}></button> */}
        </header>
    );
}

export default Header;