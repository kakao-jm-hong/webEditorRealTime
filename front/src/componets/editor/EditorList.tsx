import React from 'react';
import style from './EditorList.module.scss';
import EditorItem from './EditorItem';

const DEMO_PROPS = {
    items: [
        {
            title: '알고리즘 도와줘~',
            lang: 'C/C++',
            nickname: '홍정민',
            roomId: 'aaa',
        },
        {
            title: '사례드립니다...',
            lang: 'Python',
            nickname: '이대경',
            roomId: 'bbb',
        },
        {
            title: '리더님 코드좀 봐주세요',
            lang: 'JavaScript',
            nickname: '박건호',
            roomId: 'ccc',
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
            roomId: 'ddd',
        },
        {
            title: '김치찌개 맛있게 코드짜는 법???',
            lang: 'Python',
            nickname: '김치워리어',
            roomId: 'ddd',
        }
    ],
};

const EditorList = ()=> {
    const { items } = DEMO_PROPS;
    return (
        <ul className={style.list}>
            {items.map((item, index) => 
                <li key={index}className={style.item}>{<EditorItem item={item}/>}</li>
            )}
        </ul>
    );
};

export default EditorList;