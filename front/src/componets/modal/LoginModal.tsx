import React, { useEffect } from "react";
import style from './LoginModal.module.scss';
// import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/type';
import { setLogin } from "../../redux/actions/loginActions";

// svg
import { ReactComponent as Close }  from '../../images/svg/icon_close_search.svg';
import { ReactComponent as Kakao }  from '../../images/svg/login_kakao.svg';
import { ReactComponent as Naver }  from '../../images/svg/login_naver.svg';
import { ReactComponent as Google }  from '../../images/svg/login_google.svg';
import { ReactComponent as Facebook }  from '../../images/svg/login_facebook.svg';

const LoginModal = ()=> {
    const dispatch = useDispatch();

    const { loginModal } = useSelector((state: RootState) => ({loginModal: state.login.modal }));

    const onClick = (e: any) => {
        dispatch(setLogin(false));
    };

    const handleCloseModal = (e: any) => {
        if(e.target === e.currentTarget){
            dispatch(setLogin(false));
        }
    };
// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&prompt=consent&response_type=code&redirect_uri=https%3A%2F%2Fdev.article.me%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=1011658083016-dd66lu0slg2mcfsr5f2d016vfnqsg60r.apps.googleusercontent.com&flowName=GeneralOAuthFlow
    return (
        <>
            {loginModal &&
                <div className={style.wrap} onClick={handleCloseModal}>
                    <div className={style.inner}>
                        <div className={style.video}>비디오 삽입 예정<span className="blind">비디오</span></div>
                        <div className={style.item}>
                            <strong className={style.title}>우리의 코딩에 입장</strong>
                            <p className={style.text}>누구나 함께 멋진 코드를 만들어 갈 수 있습니다!</p>
                            <small className={style.sub}>로그인 하실 경우 이용 약관과 개인정보 정책에 동의합니다</small>
                            <a href={""} className={style.facebook}>Start With Facebook <Facebook className={style.icon_facebook} width="25" height="25"/></a>
                            <a href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=40743e16f1a2a35513c0d4bd149aa080&redirect_uri=http://localhost:8081/oauth/kakao"} className={style.kakao}>Start With Kakao<Kakao className={style.icon_kakao} width="35" height="35"/></a>
                            <a href={""} className={style.google}>Start with Google<Google className={style.icon_google} width="20" height="20"/></a>
                            <a href={""} className={style.naver}>Start With Naver<Naver className={style.icon_naver} width="30" height="30"/></a>
                            <button className={style.cancel} onClick={onClick} aria-label="취소"><Close width="30" height="30"/></button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default LoginModal;