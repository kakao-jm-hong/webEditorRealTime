import React, { useEffect, useState } from "react";
import style from './Header.module.scss';
import classnames from 'classnames';
import { ReactComponent as User }  from '../images/svg/icon_user_my.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../redux/actions/loginActions";
import { RootState } from '../redux/type';
import { useCookies } from "react-cookie";


type Pprops = {
    className?: string;
}

const Header = ({className}:Pprops)=> {
    const [userInfo,setUserInfo] = useState({});

    const dispatch = useDispatch();
    
    const { user } = useSelector((state: RootState) => ({user: state.login.user }));
    
    const onLogin = () => {
        dispatch(setLogin(true));
    };

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const getUserInfo = async (access_token: String) => {
        const result = await fetch('http://localhost:8081/user/certification',{
            method: 'GET',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': `Bearer ${access_token}`
            }
        }).then(res => res.json());
        console.log('test!!!!!!');
        return result;
    }

    useEffect(() => {
        const token = cookies.token;
        if(cookies.token !== undefined){
            const tmp = getUserInfo(token);
            console.log(tmp);
            // if(){

            // }else{
            //     removeCookie('token');
            // }
        }
    });

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