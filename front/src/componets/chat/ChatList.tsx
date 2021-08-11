import React from 'react';
import style from './ChatList.module.scss';
import ChatItem from './ChatItem';

const DEMO_PROPS = {
    items: [
        {
            title: '알고리즘 도와줘~',
            lang: 'C/C++',
            id: '1',
            lastMessage: 'hi',
        },
        {
            title: '사례드립니다...',
            lang: 'Python',
            id: '2',
            lastMessage: 'bye',
        },
        {
            title: '리더님 코드좀 봐주세요',
            lang: 'JavaScript',
            id: '3',
            lastMessage: '이거 어떻게 풀어?',
        },
        {
            title: '알고리즘 도와줘~',
            lang: 'Ruby',
            id: '4',
            lastMesage: '아 귀찮다.',
        },
        {
            title: '이거 왜 에러나요???',
            lang: 'C/C++',
            id: '5',
            lastMessage: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        }
    ],
};

const ChatList = ()=> {
    const { items } = DEMO_PROPS;
    return (
        <ul className={style.list}>
            {items.map((item, index) => 
                <li key={index}className={style.item}>{<ChatItem item={item}/>}</li>
            )}
        </ul>
    );
};

export default ChatList;