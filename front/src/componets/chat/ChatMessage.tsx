import React from "react";
import style from "./ChatMessage.module.scss";
import classnames from 'classnames';

type Pprops = {
    className?: string;
}

const ChatMessage = ({className}: Pprops) => {
    return (
        <div className={classnames(style.wrap, className)}>
        </div>
    )
}

export default ChatMessage;