import React from "react";
import style from './LoginModal.module.scss';
import classnames from 'classnames';

const LoginModal = ()=> {
    return (
        <div className={style.wrap}>
            <form className={style.inner}>
                <label htmlFor="login_id" className="blind">ID</label>
                <input id="login_id" type="text" className={classnames(style.id, style.box)}/>
                <label htmlFor="login_password" className="blind">비밀번호</label>
                <input id="login_password" type="password" className={classnames(style.password, style.box)}/>
                <button type="submit" className={classnames(style.login, style.box)}>로그인</button>
                <button className={classnames(style.kakao, style.box)}>카카오 로그인</button>
                <button className={classnames(style.google, style.box)}>구글 로그인</button>
                <button className={classnames(style.naver, style.box)}>네이버 로그인</button>
                <button className={classnames(style.cancel, style.box)} aria-label="취소"></button>
            </form>
        </div>
    );
}

export default LoginModal;