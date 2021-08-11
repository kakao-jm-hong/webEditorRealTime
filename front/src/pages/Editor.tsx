import ChatRoom from '../componets/chat/ChatRoom';
import React from 'react';
import Header from '../componets/Header';
import LoginModal from '../componets/modal/LoginModal';
import style from './Editor.module.scss';
import WebEditor from '../componets/webeditor/WebEditor';

const Editor = ()=> {
    return (
        <>
            <Header className={style.header} />
            <main id="content" className={style.main}>
                <WebEditor />
                <ChatRoom />
            </main>
        </>
    );
}

export default Editor;