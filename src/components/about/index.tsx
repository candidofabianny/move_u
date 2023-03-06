import React from "react";
import Image from "next/image";
import Styles from "./about.module.css"
import Back from "/public/images/tower_background.svg"

const About = () => {
    return <div className={Styles.container}>
        <h1 className={Styles.maintext}>Look this list up <h2 className={Styles.h2} /> every time you want <h2 className={Styles.h2}/>to travel...</h1>
        <h1 className={Styles.mini}>And fit Comedy, Drama, and Romance into your visit!</h1>
        <div className={Styles.image}>
        <Image src={Back} alt={"Tower Background"} />
        </div>
        <button>Hello</button>
        
    </div>
}

export default About;