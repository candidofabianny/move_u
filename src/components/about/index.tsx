import React from "react";
import Image from "next/image";
import Styles from "./about.module.css"
import Back from "/public/images/tower_background.svg"

const About = () => {
    return <div className={Styles.container}>
        <h1 className={Styles.maintext}>Look this list up </h1>
        <h1 className={Styles.btext}> every time you want </h1>
        <h1 className={Styles.btext}>to travel...</h1>
        <h1 className={Styles.mini}>And fit Comedy, Drama, and Romance into your visit!</h1>
        <div className={Styles.image}>
        <Image src={Back} alt={"Tower Background"} />
        </div>
        <button className={Styles.button}>Share it</button>
    </div>
}

export default About;