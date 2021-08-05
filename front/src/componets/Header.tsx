import React from 'react';
import style from './Header.module.scss';
import classnames from 'classnames';
import { ReactComponent as User }  from '../images/svg/icon_user_my.svg';
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
            <h1 className={style.title}>우리의 코드</h1>
            {user && <button type="button" className={style.user}><span className="blind">유저 정보</span><User width="28" height="28" className={style.user_image}/></button>}
            {!user && <button type="button" className={style.login} onClick={onLogin}>로그인</button>}
            {/* <button type="button" aria-label="설정 더보기" className={style.setting}></button> */}
        </header>
    );
}

export default Header;