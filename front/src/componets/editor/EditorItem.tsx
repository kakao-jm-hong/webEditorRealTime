import React from 'react';
import style from './EditorItem.module.scss';
import { ReactComponent as Python }  from '../../images/svg/icon_python.svg';
import { ReactComponent as Javascript }  from '../../images/svg/icon_javascript.svg';
import { ReactComponent as Ruby }  from '../../images/svg/icon_ruby.svg';
import { ReactComponent as C }  from '../../images/svg/icon_c.svg';
import classnames from 'classnames';

type Pprops = {
    item: {
        title?: string;
        lang?: string;
        nickname?: string;
        roomId?: string;
    }
}
const returnImage = (lang: string = 'Python') => {
    switch(lang) {
        case 'Python':
            return <Python className={style.image} />;
        case 'JavaScript':
            return <Javascript className={style.image} />;
        case 'Ruby':
            return <Ruby className={style.image} />;
        case 'C/C++':
            return <C className={style.image} />;
    }
};

const EditorItem = ({item}: Pprops) => {
    return(
        <div className={style.wrap}>
            <a href={`./editor/${item.roomId}`} className={style.link}>
                {/* [D] 언어별 이미지 매칭 */}
                {returnImage(item.lang)}
                <span className="blind">{item.lang}</span>
                <div className={style.text}>
                    <strong className={style.nickname}>{item.nickname}</strong>
                    <p className={style.title}>{item.title}</p>
                </div>
            </a>
        </div>
    )
};

export default EditorItem;