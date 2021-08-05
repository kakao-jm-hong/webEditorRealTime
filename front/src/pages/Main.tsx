import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/type';
import { setUser } from "../redux/actions/loginActions";
import { useCookies } from "react-cookie";
import Header from '../componets/Header';
import LoginModal from '../componets/modal/LoginModal';
import style from './common.module.scss';

const Main = ()=> {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    const dispatch = useDispatch();

    const getUserInfo: any = async (access_token: String) => {
        const result = await fetch('http://localhost:8081/user/certification',{
            method: 'GET',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': `Bearer ${access_token}`
            }
        }).then(res => res.json());
        return result;
    }

    useEffect(() => {
        const token = cookies.token;
        if(cookies.token !== undefined){
            getUserInfo(token).then((data: any) => {
                console.log(data);
                if(data){
                    dispatch(setUser(data));
                }else{
                    removeCookie('token');
                }
            });
        }
    });
    
    return (
        <>
            <Header className={style.header} />
            <main id="content" className={style.main}>
                
            </main>
            <LoginModal />
        </>
    );
}

export default Main;