import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},

            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('Snete changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;