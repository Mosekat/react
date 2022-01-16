import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from "./index.module.css";
console.log(styles)

function Message({text}) {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

function App() {
    const text = 'Самый лучший день сегодня';
    return (
        <div className={styles.test}>
            <Message text={text}/>
        </div>
    )

}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


