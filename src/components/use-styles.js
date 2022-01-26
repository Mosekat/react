import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((ctx) => {
    console.log('ctx', ctx);
    return {

        chat: {

            width: '100%',
        },
        chatRoom: {
            background: '#d6e9f2',
            display:'flex',

        },
        input: {
            background: 'white',
            paddingRight: '15px',
            paddingLeft: '15px',
            color: '#4688aa',
            position:'fixed',
            bottom:'0'
        },
        message: {
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: "15px",
            marginLeft: '20px',
            display: 'table',
            borderRadius: "25px 25px 25px 25px",
            color: 'white',
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            textAlign: "center",
            whiteSpace: 'nowrap',
            width: '50%',

        },
        type_message_user: {

            background: '#58b2b8',
            margin: '20px 20px 0 auto',

        },
        type_message_bot: {

            background: '#a4a5a7',

        },
        msg:{
            float:'left',
        },
        date:{
            float:'right',
        }

    }
})