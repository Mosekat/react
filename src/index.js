import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from "./index.module.css";

function App() {

    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    const addMessage = (msg) => {
        if (msg) {
            setMessageList([...messageList, {author: 'User', text: msg}]);
            setMessage('');
        } else {
            alert('Enter a message')
        }

    }
    const writeMessage = (event) => {
        setMessage(event.target.value)
    }
    useEffect(() => {
        let timerId = null;

        if (messageList.length) {
            const lastMessage = messageList[messageList.length - 1];
            if (lastMessage.author === 'User') {
                timerId = setTimeout(() => {
                    setMessageList([...messageList, {author: 'Bot', text: 'hello User'}])
                }, 2000);

            }
        }
        return () => clearInterval(timerId);
    }, [messageList])

    return (
        <div className={styles.test}>

            <input onChange={writeMessage} placeholder='text message' value={message}/>
            <button onClick={() => {
                addMessage(message);
            }}>Send message
            </button>
            {messageList.map(obMessage => (
                <div>

                    <h3>{obMessage.author}</h3>
                    <p>{obMessage.text}</p>
                    <hr/>

                </div>
            ))}

        </div>
    )

}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
