import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

let path = "/dialogs/"+ props.id

    return (
        <div className={classes.dialogsItem + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Ivan"},
        {id: 4, name: "Marina"},
        {id: 5, name: "Sasha"},
    ]

    let MessageData = [
        {id: 1, message: "Hello, my dear friend"},
        {id: 2, message: "Hello, my dear friend"},
        {id: 3, message: "Hello"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "Mama"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
                <Message message={MessageData[2].message} />
                <Message message={MessageData[3].message} />
                <Message message={MessageData[4].message} />
            </div>
        </div>
    )
}

export default Dialogs;
