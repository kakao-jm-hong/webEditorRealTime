import React, { useState } from "react";
import style from './Header.module.scss';
import classnames from 'classnames';
import { ReactComponent as User }  from '../images/svg/icon_user_my.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../redux/actions/loginActions";
import { RootState } from '../redux/type';
import HomeMyLayer from "./home/HomeMyLayer";
import ThumbnailImage from "./thumbnail/ThumbnailImage";

type Pprops = {
    className?: string;
}

const Header = ({className}:Pprops)=> {

    const dispatch = useDispatch();
    
    const { user } = useSelector((state: RootState) => ({user: state.login.user }));
    
    const onLogin = () => {
        dispatch(setLogin(true));
    };

    const onMy = () => {
        // TODO 나의 창 띄우기
    };

    return (
        <header className={classnames(style.header, className)}>
            <h1 className={style.title}>우리의 코드</h1>
            {user && 
                <>
                    <button type="button" className={style.user} onClick={onMy}>
                        <ThumbnailImage userImage={user.userImage} />
                    </button>
                    <HomeMyLayer />
                </>
            }
            {!user && <button type="button" className={style.login} onClick={onLogin}>로그인</button>}
            {/* <button type="button" aria-label="설정 더보기" className={style.setting}></button> */}
        </header>
    );
}

export default Header;