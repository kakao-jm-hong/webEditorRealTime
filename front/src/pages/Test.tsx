import React from 'react';
import style from './Test.scss';

const Test = ()=> {

    const [items,setItems] = React.useState([]);

    const onChangeHandlebar = (e) => {
        const value = e.currentTarget.value;
        console.log(value);
        setItems(pre => {
            return [...pre, value];
        })
    }
    return(
        <>
            <input type="text" onChange={onChangeHandlebar} />
            <ul>
                {items.map((item)=> <li>{item}</li>)}
            </ul>
        </>
    );
}

export default Test;