import React, { useEffect, useState } from "react";
import EditorList from '../componets/editor/EditorList';
import style from './Main.module.scss';

const Main = ()=> {
    
    return (
        <main id="content" className={style.main}>
            <h3 className={style.sub_title}>참여 중인 방</h3>
            <EditorList />
            <h3 className={style.sub_title}>전체 방</h3>
            <EditorList />
        </main>
    );
}

export default Main;