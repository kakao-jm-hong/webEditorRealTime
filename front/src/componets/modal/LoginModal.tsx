import React from "react";
import style from './LoginModal.module.scss';
import classnames from 'classnames';
import { ReactComponent as Close }  from '../../images/svg/icon_close_search.svg';

const LoginModal = ()=> {
    return (
        <div className={style.wrap}>
            <form className={style.inner}>
                <label htmlFor="login_id" className="blind">ID</label>
                <input id="login_id" type="text" placeholder="아이디" className={style.id}/>
                <label htmlFor="login_password" className="blind">비밀번호</label>
                <input id="login_password" type="password" placeholder="비밀번호" className={style.password}/>
                <button type="submit" className={style.login}>로그인</button>
                <button className={style.kakao}>카카오 로그인</button>
                <button className={style.google}>구글 로그인</button>
                <button className={style.naver}>네이버 로그인</button>
                <button className={style.cancel} aria-label="취소"><Close width="18" height="18"/></button>
            </form>
        </div>
    );
}

export default LoginModal;