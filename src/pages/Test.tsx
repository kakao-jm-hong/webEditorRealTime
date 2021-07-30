import * as React from 'react';

const Test = ()=> {

    const [items, setItems] = React.useState([]);
    const onChnageHandler = (e: any) => {
        const value = e.currentTarget.value;
        console.log(value);
        setItems(prevState => {
            return [...prevState, value];
        });
    }

    return (
        <>  
            <input type="text" onChange={onChnageHandler}/>
            <ul>
                {items.map((value) => <li>{value}</li>)}
            </ul>
        </>
    );
}

export default Test;