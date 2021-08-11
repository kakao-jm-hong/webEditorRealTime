import React, { useState } from "react";
import style from './Header.module.scss';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../redux/actions/loginActions";
import { RootState } from '../redux/type';
import HomeMyLayer from "./home/HomeMyLayer";
import ThumbnailImage from "./thumbnail/ThumbnailImage";
import { useCookies } from "react-cookie";
import { ReactComponent as Chat }  from '../images/svg/icon_chat.svg';
// import { Redirect } from "react-router-dom";

type Pprops = {
    className?: string;
}

const Header = ({className}:Pprops)=> {

    const dispatch = useDispatch();
    
    const { user } = useSelector((state: RootState) => ({user: state.login.user }));
    
    const onLogin = () => {
        dispatch(setLogin(true));
    };

    const [myLayer, setMyLayer] = useState(false);

    const onClick = () => {
        setMyLayer(!myLayer);
    };

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const logout = () => {
        console.log("remove token");
        removeCookie('token');
    };

    return (
        <header className={classnames(style.header, className)}>
            <h1 className={style.title}><a href="/">우리의 코드</a></h1>
            {user && 
                <>
                    <button type="button" className={style.chat}><Chat width="35" height="35" /><span className="blind">채팅</span></button>
                    <button type="button" className={style.user} onClick={onClick}>
                        <ThumbnailImage userImage={user.userImage} />
                    </button>
                    {myLayer && <HomeMyLayer onClick={onClick} logout={logout}/>}
                </>
            }
            {!user && <button type="button" className={style.login} onClick={onLogin}>로그인</button>}
            {/* <button type="button" aria-label="설정 더보기" className={style.setting}></button> */}
        </header>
    );
}

export default Header;