import React, {useEffect} from "react";
import Main from './pages/Main';
import Editor from './pages/Editor';
import Header from './componets/Header';
import LoginModal from './componets/modal/LoginModal';
import { BrowserRouter as Router, Route, Switch,/* Link*/ } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/type';
import { setUser } from "./redux/actions/loginActions";
import { useCookies } from "react-cookie";
const Page = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const dispatch = useDispatch();

    const getUserInfo: any = async (access_token: String) => {
        console.log("결과 보냄");
        const result = await fetch('http://localhost:8081/user/certification',{
            method: 'GET',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': `Bearer ${access_token}`
            }
        }).then(res => res.json());
        console.log("로그인 상대 결과 받음");
        return result;
    };

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

    return(
        <Router>
            <Header />
            <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/editor' component={Editor} />
            {/* <Route path='/mypage' component={Mypage} /> */}
            </Switch>
            <LoginModal />
        </Router>
    )
}

export default Page;