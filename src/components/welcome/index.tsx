import React from "react";
import Image from "next/image";
import Styles from "./welcome.module.css";
import Center from "/public/images/Center.svg"
import Maps from "/public/images/maps_icon.svg"

const Welcome = () => {
    return <div className={Styles.container}>
        
        

        <div className={Styles.text}>
        <div className={Styles.icon}>
        <Image src={Maps} alt={"Maps icon"} />
        </div>
        <h1 className={Styles.h1}>MoveU</h1>
        <h1 className={Styles.h2}>Travel bucket</h1>
        <h1 className={Styles.h2}>list from movies</h1>
        <p className={Styles.p}>Movies scenarios that can inspire you to travel</p>
        <button className={Styles.buttonshare}>Contact me</button>
        
        
        </div>

        <div className={Styles.image}>
        <Image src={Center} alt={"Center image"} />
        </div>
        
        <div className={Styles.elipse2}></div>
    </div>
}

export default Welcome;