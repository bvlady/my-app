const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            img: <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cameronavatar.jpg/200px-Cameronavatar.jpg'></img>
        },
        {
            id: 2,
            name: 'Andrew',
            img: <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cameronavatar.jpg/200px-Cameronavatar.jpg'></img>
        },
        {
            id: 3,
            name: 'Sveta',
            img: <img src='https://cdn4.iconfinder.com/data/icons/users-29/32/165-01-512.png'></img>
        },
        {
            id: 4,
            name: 'Sasha',
            img: <img src='https://cdn4.iconfinder.com/data/icons/users-29/32/165-01-512.png'></img>
        },
        {
            id: 5,
            name: 'Victor',
            img: <img src='https://cdn4.iconfinder.com/data/icons/users-29/32/165-01-512.png'></img>
        },
        {
            id: 6,
            name: 'Valera',
            img: <img src='https://cdn4.iconfinder.com/data/icons/users-29/32/165-01-512.png'></img>
        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;