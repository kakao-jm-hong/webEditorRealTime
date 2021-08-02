import React, { useEffect } from "react";
import style from './LoginModal.module.scss';
// import classnames from 'classnames';
import { ReactComponent as Close }  from '../../images/svg/icon_close_search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/type';
import { setLogin } from "../../redux/actions/loginActions";

const LoginModal = ()=> {
    const dispatch = useDispatch();

    const { loginModal } = useSelector((state: RootState) => ({loginModal: state.login.modal }));

    const onClick = () => {
        dispatch(setLogin(false));
    };

    return (
        <div className={style.wrap} onClick={onClick} style={{display: loginModal ? 'block' : 'none'}}>
            <form className={style.inner}>
                <label htmlFor="login_id" className="blind">ID</label>
                <input id="login_id" type="text" placeholder="아이디" className={style.id}/>
                <label htmlFor="login_password" className="blind">비밀번호</label>
                <input id="login_password" type="password" placeholder="비밀번호" className={style.password}/>
                <button type="submit" className={style.login}>로그인</button>
                <a href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=40743e16f1a2a35513c0d4bd149aa080&redirect_uri=http://localhost:8081/oauth/kakao"} className={style.kakao}>카카오 로그인</a>
                <a href={""} className={style.google}>구글 로그인</a>
                <a href={""} className={style.naver}>네이버 로그인</a>
                <button className={style.cancel} onClick={onClick}aria-label="취소"><Close width="18" height="18"/></button>
            </form>
        </div>
    );
}

export default LoginModal;