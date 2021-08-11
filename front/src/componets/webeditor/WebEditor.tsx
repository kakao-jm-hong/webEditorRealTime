import React from "react";
import classnames from "classnames";
import style from './WebEditor.module.scss';

type Pprops = {
    className?: string;
};

const WebEditor = ({className}: Pprops) => {
    return (
        <div className={classnames(className, style.wrap)}>
            <span style={{color: '#1DDB16', fontWeight: 800}}># javaScript 테스트 코드입니다.</span><br></br>
            <br></br>
            <span style={{fontWeight:800}}>{'for (let i=0; i <10; i++)'}</span>
            <span style={{color: "pink", fontWeight: 800}}>{' {'}</span>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{fontWeight:800, color:'#A0D9E2'}}>{'console'}</span>
            <span style={{fontWeight:800, color:'#fff'}}>{'.'}</span>
            <span style={{fontWeight:800, color:'#FAED7D'}}>{'log'}</span>
            <span style={{fontWeight:800, color:'#FFE400'}}>{'('}</span>
            <span style={{fontWeight:700, fontSize: 12, color: '#FFCD12'}}>{'\'Hello World!!\''}</span>
            <span style={{fontWeight:800, color:'#FFE400'}}>{')'}</span>
            <span style={{fontWeight:800, color:'#fff'}}>{';'}</span>
            <br></br>
            <span style={{color: "pink", fontWeight: 800}}>{' }'}</span>
        </div>
    )
};

export default WebEditor;