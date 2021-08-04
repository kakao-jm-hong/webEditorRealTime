import React from 'react';
import Header from '../componets/Header';
import LoginModal from '../componets/modal/LoginModal';
import style from './Main.module.scss';
// type Tprops {

// }

const Main = ()=> {
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