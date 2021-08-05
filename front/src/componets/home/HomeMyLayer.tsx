import React, { useState } from "react";
import style from './HomeMyLayer.module.scss';
import classnames from 'classnames';
import { ReactComponent as User }  from '../images/svg/icon_user_my.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../../redux/actions/loginActions";
import { RootState } from '../../redux/type';
import ThumbnailImage from "../thumbnail/ThumbnailImage";


import { ReactComponent as Close }  from '../../images/svg/icon_close_search.svg';
type Pprops = {
    className?: string;
}



const HomeMyLayer = () => {
    const { user } = useSelector((state: RootState) => ({user: state.login.user }));
    return (
        <div className={style.wrap}>
            <div className={style.inner}>
                <h2 className={style.title}>계정</h2>
                <div className={style.user}>
                    <ThumbnailImage userImage={user.userImage} className={style.thumbnail}/>
                    <span className={style.name}>{user.nickname}</span> 
                </div>
                <div className={style.interst}>
                    <span className={style.item}>{0} 팔로윙</span>
                    <span className={style.item}>{2} 팔로워</span>
                </div>
                <div className={style.list}>
                    <div> 참여 중인 코드</div>
                </div>
                <button className={style.cancel}><Close width="25" height="25"/></button>
            </div>
        </div>
    );
}

export default HomeMyLayer;