import React from 'react';
import Header from '../componets/Header';
import LoginModal from '../componets/modal/LoginModal';
import style from './Editor.module.scss';

const Editor = ()=> {
    return (
        <>
            <Header className={style.header} />
            <main id="content" className={style.main}>

            </main>
            <LoginModal />
        </>
    );
}

export default Editor;