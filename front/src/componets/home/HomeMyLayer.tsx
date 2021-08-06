import React, { useEffect, useRef, useState } from "react";
import style from './HomeMyLayer.module.scss';
import classnames from 'classnames';
import { ReactComponent as User }  from '../images/svg/icon_user_my.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../../redux/actions/loginActions";
import { RootState } from '../../redux/type';
import ThumbnailImage from "../thumbnail/ThumbnailImage";


import { ReactComponent as Close }  from '../../images/svg/icon_close_search.svg';
type Pprops = {
    onClick?: any;
    logout?: any;
    className?: string;
}

const HomeMyLayer = ({onClick, logout, className}: Pprops) => {
    const el = useRef();
    const { user } = useSelector((state: RootState) => ({user: state.login.user }));

    // const closeHanler = (e: any) => {
    //     if(user && (!el.current|| !el.current.contains(e.target))) onClick();
    // };

    // useEffect(() => {
    //     window.addEventListener('click', closeHanler);
    //     return () => {
    //         window.addEventListener('click', closeHanler);
    //     }
    // });
    
    return (
        <div className={style.wrap} /*ref={el}*/>
            <div className={style.inner}>
                <h2 className={style.title}>계정</h2>
                <a href="#" className={style.user}>
                    <ThumbnailImage userImage={user.userImage} className={style.thumbnail}/>
                    <span className={style.name}>{user.nickname}</span> 
                </a>
                <div className={style.interst}>
                    <a href="#" className={style.item}>{0} 팔로윙</a>
                    <a href="#" className={style.item}>{2} 팔로워</a>
                </div>
                <div className={style.list}>
                    <a href="#" className={style.join}> 참여 중인 코드 <span className={style.number}>3</span></a>
                    <button type="button" onClick={logout} className={style.logout}>로그아웃 </button>
                </div>
                <button className={style.cancel} onClick={onClick}><Close width="25" height="25"/></button>
            </div>
        </div>
    );
}

export default HomeMyLayer;