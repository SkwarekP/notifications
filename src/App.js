import "./assets/style.css";
import NotificationsList from "./components/NotificationsList";
import avatarMark from "../src/assets/images/avatar-mark-webber.webp";
import angelaGray from "../src/assets/images/avatar-angela-gray.webp";
import jacobThompson from "../src/assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "../src/assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "../src/assets/images/avatar-kimberly-smith.webp";
import nathanPeterson from "../src/assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "../src/assets/images/avatar-anna-kim.webp";
import picture from "../src/assets/images/image-chess.webp";
import {useState} from "react";

function App() {

    const [dummy_data, setDummy_data] = useState(
        [
            {id:1, image:avatarMark, name: "Mark Webber", description: "reacted to your recent post", goal:"My first tournament today!" ,time:"1m ago", isChecked: false,},
            {id:2, image:angelaGray, name: "Angela Gray", description: "followed you", time:"5m ago", isChecked: false},
            {id:3, image:jacobThompson, name:"Jacob Thompson", description:"has joined your group", goal:"Chess Club", time:"1 day ago", isChecked: false},
            {id:4, image:rizkyHasanuddin, name:"Rizky Hassanuddin", description:"sent you a private message",
                goalMessage:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
                ,time:"5 days ago", isChecked: false
            },
            {id:5, image:kimberlySmith, name:"Kimberly Smith", description:"commented on your picture", picture:picture, time:"1 week ago", isChecked: false},
            {id:6, image:nathanPeterson, name:"Nathan Peterson", description:"reacted to your recent post", goal:"5 end-game strategies to increase your win rate", time:"2 weeks ago", isChecked: false},
            {id:7, image:AnnaKim, name:"Anna Kim", description:"left the group",goal:"Chess Club", time:"2 weeks ago", isChecked: false}
        ]
    )
    const [counter, setCounter] = useState(dummy_data.length);

    const onUpdateIsChecked = (id) => {
        const newState = dummy_data.map(item => {
            if(item.id === id){
                return {...item, isChecked: true}
            }
            return item;
        })
        setDummy_data(newState);
        setCounter(newState.filter(item => item.isChecked === false).length);
    }
    const markAllHandler = () => {
        setCounter(0);
        const newState = dummy_data.map(item => {
            return {...item, isChecked:true}
        })
        setDummy_data(newState);
    }

  return (
    <div className="container">
        <nav className="nav__container">
            <div className="notify_counter">
            <header><h2>Notifications</h2></header>
            <button className="notification__btn">{counter}</button>
            </div>
            <button className="mark_all__btn" onClick={markAllHandler}>Mark all as read</button>
        </nav>
        <NotificationsList notifications={dummy_data} onUpdate={onUpdateIsChecked} markAll={markAllHandler}/>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/SkwarekP">Patryk Skwara</a>.
        </div>
    </div>
  );
}

export default App;
