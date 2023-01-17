import Notification from "./Notification";

function NotificationsList(props) {

    return (
        props.notifications.map(notify => (
            <Notification
                key={notify.id}
                id={notify.id}
                image={notify.image}
                name={notify.name}
                description={notify.description}
                goal={notify.goal}
                time={notify.time}
                goalMessage={notify.goalMessage}
                picture={notify.picture}
                isChecked={notify.isChecked}
                onUpdate={props.onUpdate}/>
        ))
    )
}
export default NotificationsList;