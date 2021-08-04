import React from 'react';
import style from './EditorList.scss';
import EditorItem from './EditorItem';

const DEMO_PROPS = {
    items: [
        {
            title: '알고리즘 도와줘~',
            lang: 'C/C++',
            nickname: '홍정민',
        },
        {
            title: '사례드립니다...',
            lang: 'Python',
            nickname: '이대경',
        },
        {
            title: '리더님 코드좀 봐주세요',
            lang: 'JavaScript',
            nickname: '박건호',
        },
        {
            title: '알고리즘 도와줘~',
            lang: 'Ruby',
            nickname: '권민용',
        },
        {
            title: '이거 왜 에러나요???',
            lang: 'C/C++',
            nickname: '백선빈',
        }
    ],
};

const EditorList = ()=> {
    const { items } = DEMO_PROPS;
    return (
        <ul className={style.list}>
            {items.map((item) => 
                <li>{<EditorItem item={item}/>}</li>
            )}
        </ul>
    );
};

export default EditorList;