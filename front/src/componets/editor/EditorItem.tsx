import React from 'react';
import style from './EditorItem.scss';

type Pprops = {
    item: {
        title?: string;
        lang?: string;
        nickname?:  string;
    }
}

const EditorItem = ({item}: Pprops) => {
    return(
        <div>
            dd
            <div>{item.title}</div>
            <div>{item.lang}</div>
            <div>{item.nickname}</div>
        </div>
    )
};

export default EditorItem;