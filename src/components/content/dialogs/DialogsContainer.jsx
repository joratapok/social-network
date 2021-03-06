import React from 'react';
import {addNewMessageActionCreator, changeAreaMessageActionCreator} from "../../../redux/messagesPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let messagesPage = store.getState().messagesPage
                let addNewMessage = () => {
                    store.dispatch(addNewMessageActionCreator())
                }

                let changeMessageArea = (text) => {
                    store.dispatch(changeAreaMessageActionCreator(text))
                }
                return (
                    <Dialogs addNewMessage={addNewMessage}
                             changeMessageArea={changeMessageArea}
                             messagesPage={messagesPage}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageArea(text) {
            dispatch(changeAreaMessageActionCreator(text))
        },
        addNewMessage() {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;