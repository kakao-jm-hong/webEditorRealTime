import React from "react";
import style from "./ChatRoom.module.scss";
import classnames from 'classnames';

type Pprops = {
    className?: string;
}

const ChatRoom = ({className}: Pprops) => {
    return (
        <div className={classnames(style.wrap, className)}>
        </div>
    )
}

export default ChatRoom;