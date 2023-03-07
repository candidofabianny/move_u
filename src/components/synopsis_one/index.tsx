import React from "react";
import Image from "next/image";
import Styles from "./synopsis_one.module.css"
import Background from "/public/images/beforesunrise_synopsis.svg"

const SynopsisOne = () => {
    return <div className={Styles.container}>
        <h1 className={Styles.title}>Before Sunrise</h1>
        <h1 className={Styles.maintext}>While travelling on a train in Europe, Jesse, an American, meets Celine, a French woman. On his last day in Europe before returning to the US, he decides to spend his remaining hours with her.</h1>
        <div className={Styles.image}>
        <Image src={Background} alt={"Before Sunrise Image"} />
        </div>
    </div>
}

export default SynopsisOne;