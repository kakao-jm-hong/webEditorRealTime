import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/type';
import { setUser } from "../redux/actions/loginActions";
import { useCookies } from "react-cookie";
import Header from '../componets/Header';
import LoginModal from '../componets/modal/LoginModal';
import EditorList from '../componets/editor/EditorList';
import style from './Main.module.scss';
// import Chat from "../componets/chat/Chat";

const DEMO_PROPS = {
    activeChat: true,
}

const Main = ()=> {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    // [D] 임시데이터
    const {activeChat} = DEMO_PROPS;
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
                    console.log("로그인 성공하셧습니다.");
                    dispatch(setUser(data));
                }else{
                    removeCookie('token');
                    console.log("로그인 오류");
                }
            });
        }
    });
    
    return (
        <>
            <Header className={style.header} />
            <main id="content" className={style.main}>
                <EditorList />
                <LoginModal />
            </main>
        </>
    );
}

export default Main;