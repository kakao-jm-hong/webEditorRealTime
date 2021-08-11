import React from "react";
import style from "./ChatMessage.module.scss";
import ThumbnailImage from "../thumbnail/ThumbnailImage";
import classnames from 'classnames';


type Pprops = {
    className?: string;
    myId: string;
    message: {
        id: string;
        nickname: string;
        text: string;
        imageSrc?: string;
    }
}

const ChatMessage = ({className,myId,message}: Pprops) => {
    return (
        <>
            {myId === message.id ?
            (<div className={classnames(style.wrap, className, style.left)}>
                <div>
                    <ThumbnailImage className={classnames(style.imageWrap)} classNameImage={style.imageInner}/>
                </div>
                <div className={style.box}>
                    <span>{message.nickname}</span>
                    <div className={style.message}>{message.text}</div>
                </div>
            </div>):(
            <div className={classnames(style.wrap, className, style.right)}>
                <div className={style.box}>
                    <span>{message.nickname}</span>
                    <div className={style.message}>{message.text}</div>
                </div>
                <div>
                    <ThumbnailImage className={classnames(style.imageWrap)} classNameImage={style.imageInner}/>
                </div>
            </div>)}

        </>
    )
}

export default ChatMessage;