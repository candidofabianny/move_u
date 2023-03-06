import React from "react";
import Image from "next/image";
import Styles from "./about_one.module.css"
import Background from "/public/images/nottinghill_about.svg"

const AboutOne = () => {
    return <div className={Styles.container}>
        <div className={Styles.maintext}>
        <h1>In this list you can discover places and movies with such beautiful photographs that you will want to visit!</h1>
    </div>
    <div className={Styles.image}>
        <Image src={Background} alt={"Notting Hill Background"} />
        </div>
    </div>
}

export default AboutOne;