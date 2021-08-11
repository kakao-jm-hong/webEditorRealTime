import React from "react";
import style from './Thumbnail.module.scss';
import classnames from 'classnames';
import { ReactComponent as User }  from '../../images/svg/icon_user_my.svg';

type Pprops = {
    className?: string;
    userImage?: string;
    classNameImage?: string
}

const ThumbnailImage = ({userImage, classNameImage, className}: Pprops)=> {
    return (
        <div className={classnames(style.user, className)}>
            <span className="blind">유저 정보</span>
            <User width="28" height="28" className={classnames(style.user_image, classNameImage)}/>
            <div style={{backgroundImage: "url("+userImage+")"}} className={style.real_image}></div>
        </div>
    );
}

export default ThumbnailImage;