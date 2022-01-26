import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
    Input,
    Alert,
    InputAdornment,
    Avatar,
    ThemeProvider,
    createTheme
} from '@mui/material'
import ReactDOM from 'react-dom';
import './index.css';
import EmailIcon from '@mui/icons-material/Email';
import {useStyles} from "./components/use-styles";
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';


export default function GutterlessList() {
  
    const [chatList] = useState([{name: 'chat1', id: 1}, {name: 'chat2', id: 2}, {name: 'chat3', id: 3}]);
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#9bdbfc' }}>
            {chatList.map((chat,key) => (
                <ListItem
                    key={key}
                    disableGutters
                    secondaryAction={
                        <IconButton>
                            <CommentIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary={` ${chat.name}`} />
                </ListItem>
            ))}
        </List>
    );
}

const theme = createTheme();



function App() {
    const styles = useStyles();

    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const addMessage = () => {
        if (message) {
            setMessageList([...messageList, {author: 'User', text: message, date: new Date()}]);
            setMessage('');
        } else {
            setOpen(true)
            setTimeout(() => setOpen(false), 3000)
        }

    }
    const writeMessage = (event) => {
        setMessage(event.target.value)
    }
    const handlePressInput = (event) => {

        if (event.code === "Enter" || event.code === "NumpadEnter") {
            addMessage();

        }

    }

    const ref = useRef(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    const handleScrollBottom = useCallback(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);
    useEffect(() => {
        handleScrollBottom();
    }, [messageList, handleScrollBottom]);

    useEffect(() => {
        let timerId = null;
        if (messageList.length) {
            const lastMessage = messageList[messageList.length - 1];
            if (lastMessage.author === 'User') {
                timerId = setTimeout(() => {
                    setMessageList([...messageList, {author: 'Bot', text: 'hello User', date: new Date()}])
                }, 2000);

            }
        }
        return () => clearInterval(timerId);
    }, [messageList])

    return (
        <div>

            <div className={styles.chatRoom}>
                <GutterlessList/>
                <div className={styles.chat}>
                    {messageList.map((obMessage, key) => (
                        <div key={key} className={[
                            styles.message,
                            (obMessage.author.toLowerCase() === 'user' ? styles.type_message_user
                                                                       : styles.type_message_bot)
                        ].join(' ')}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                            <h3>{obMessage.author}</h3>
                            <div className={styles.msg}>{obMessage.text}</div>
                            <p className={styles.date}>{obMessage.date.toLocaleTimeString()}</p>


                        </div>
                    ))}
                    <Collapse in={open}>
                        <Alert severity="info">Введите сообщение</Alert>
                    </Collapse>
                    <div>
                    <Input
                        className={styles.input}
                        fullWidth
                        onKeyPress={handlePressInput}
                        onChange={writeMessage}
                        placeholder='text message...'
                        value={message}
                        inputRef={ref}
                        endAdornment={message && (<InputAdornment position={"end"}> < EmailIcon onClick={addMessage}>
                        </EmailIcon></InputAdornment>)}


                    />
                    </div>
                </div>
            </div>
        </div>

    )

}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
;
