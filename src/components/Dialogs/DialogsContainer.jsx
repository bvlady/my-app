import React from 'react'
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps= (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps= (dispatch) =>{

    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
        // updateNewMessageBody: (body) => {
        //     dispatch(updateNewMessageBodyCreator(body));
        // }
    }
}
// compose (connect(mapStateToProps, mapDispatchToProps),withAuthRedirect) (Dialogs)
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);
// export default DialogsContainer;
export default compose (connect(mapStateToProps, mapDispatchToProps),withAuthRedirect) (Dialogs);