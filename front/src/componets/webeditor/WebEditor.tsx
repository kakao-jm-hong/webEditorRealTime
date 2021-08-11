import React from "react";
import classnames from "classnames";
import style from './WebEditor.moudle.scss';
type Pprops = {
    className?: string;
}

const WebEditor = ({className}: Pprops) => {
    return (
        <div className={classnames(style.wrap, className)}>
            WebEditor
        </div>
    )
};

export default WebEditor;