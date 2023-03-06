import React from "react";
import Image from "next/image";
import Styles from "./banner.module.css"
import Background from "/public/images/nottinghill_about.svg"

const Banner = () => {
    return <div className={Styles.container}>
        <h1 className={Styles.maintext}>In this list you can discover places and movies with such beautiful photographs that you will want to visit!</h1>
    <div className={Styles.image}>
        <Image src={Background} alt={"Notting Hill Background"} />
        </div>
    </div>
}

export default Banner;