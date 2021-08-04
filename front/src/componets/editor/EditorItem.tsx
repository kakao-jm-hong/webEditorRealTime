import React from 'react';
import style from './EditorItem.module.scss';

type Pprops = {
    item: {
        title?: string;
        lang?: string;
        nickname?:  string;
    }
}

const EditorItem = ({item}: Pprops) => {
    return(
        <div className={style.wrap}>
            <a href={'#'} className={style.link}>
                <div className={style.image}><span className="blind">개발 언어</span>{item.lang}</div>
                <div className={style.text}>
                    <strong className={style.nickname}>{item.nickname}</strong>
                    <p className={style.title}>{item.title}</p>
                </div>
            </a>
        </div>
    )
};

export default EditorItem;