import classes from "./Notification.module.css";
import {useEffect} from "react";

function Notification(props) {
    const cardClickHandler = (e) => {
        e.preventDefault();
        // let card = document.getElementById(`${props.id}`)
        // card.classList.remove(classes.card__click);
        props.onUpdate(props.id);
    }

    useEffect(() => {
        let card = document.getElementById(`${props.id}`)

        if(props.isChecked){
            card.classList.remove(classes.card__click);
        }
    }, [props.isChecked, props.id])

    return (
        <div className={classes.card__container}>
            <div className={`${classes.card} ${classes.card__click}`} onClick={cardClickHandler} id={props.id}>
                <div>
                    <img className={classes.img} src={props.image} alt="avatar-mark" />
                </div>
                <div className={classes.card__notification}>
                    <header className={classes.header}>
                        <p className={classes.description}>
                            <span className={classes.name}>{props.name} </span>
                            {props.description}
                            <span className={props.goal==="Chess Club" ? classes.chess_club : classes.b_ }> {props.goal} </span>
                        </p>
                        {props.isChecked ? "" : <div className={classes.new__notify}></div>}
                    </header>
                <p className={classes.time}>{props.time}</p>
                    {props.goalMessage ? <div className={classes.goal__message}>
                        {props.goalMessage}
                    </div> : null}
                </div>
                    {props.picture ? <img className={classes.img__comment} src={props.picture} alt="comment pic"/> : ""}
            </div>
        </div>
    )
}
export default Notification;