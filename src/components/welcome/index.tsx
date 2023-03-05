import React from "react";
import Styles from "./welcome.module.css";

const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}></div>
        <h1 className={Styles.h1}>MoveU</h1>
        <h2 className={Styles.h2}>My travel bucket</h2>
        <h2 className={Styles.h2}>list from movies</h2>
        <p className={Styles.p}>Movies scenarios that can inspire you to travel</p>
        <button className={Styles.buttonshare}>Contact me</button>
        <div className={Styles.box}></div>
        <div className={Styles.image}></div>
    </div>
}

export default Welcome;