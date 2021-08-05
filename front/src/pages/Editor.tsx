import React from 'react';
import Header from '../componets/Header';
import LoginModal from '../componets/modal/LoginModal';
import EditorList from '../componets/editor/EditorList';
import style from './Main.module.scss';

const Editor = ()=> {
    return (
        <>
            <Header className={style.header} />
            <main id="content" className={style.main}>
                <EditorList />
            </main>
            <LoginModal />
        </>
    );
}

export default Editor;