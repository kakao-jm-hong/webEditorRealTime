import React from 'react';
import ChatRoom from '../componets/chat/ChatRoom';
import style from './Editor.module.scss';
import WebEditor from '../componets/webeditor/WebEditor';

const Editor = ()=> {
    return (
        <>
            <main id="content" className={style.main}>
                <WebEditor className={style.webeditor}/>
                <ChatRoom className={style.chatroom}/>
            </main>
        </>
    );
}

export default Editor;