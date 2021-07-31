import React from 'react';
import style from './Test.module.scss';

const Test = ()=> {

    const [items,setItems] = React.useState<String[]>([]);

    const onChangeHandlebar = (e: any) => {
        const value: String = e.currentTarget.value;
        setItems(pre => {
            return [...pre, value];
        });
    }
    return(
        <>
            <input type="text" onChange={onChangeHandlebar} />
            <ul className={style.ul}>
                {items.map((item, index)=> <li key={index}className={style.li}>{item}</li>)}
            </ul>
        </>
    );
}

export default Test;