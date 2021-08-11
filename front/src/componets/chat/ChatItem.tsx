import React from 'react';
import style from './ChatItem.module.scss';
import classnames from 'classnames';

type Pprops = {
    item: {
        title?: string;
        lang?: string;
        id?:  string;
        lastMessage?: string;
    }
}

const ChatItem = ({item}: Pprops) => {
    return(
        <div className={style.wrap}>

        </div>
    )
};

export default ChatItem;