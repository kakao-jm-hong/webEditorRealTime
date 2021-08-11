import React from 'react';
import style from './Chat.module.scss';
import classnames from 'classnames';

type Pprops = {
    item?: {
    },
}

const Chat = ({item}: Pprops) => {
    return(
        <>
            <div className={style.wrap}>
                <div><h2>채팅</h2><button type="button">검색</button><button type="button">취소</button></div>
                <div>내 채팅 <button type="button"><span className="blind">{"펼치기/닫기"}</span></button></div>
                <div>
                    
                </div>

            </div>
            <div className="blind">
                채팅 입장 UI
            </div>
        </>
    )
};

export default Chat;