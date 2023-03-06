import React from "react";
import Image from "next/image";
import Styles from "./listing.module.css"

const Listing = () => {
    return <div className={Styles.container}>
        <h1 className={Styles.title}>MoveU List</h1>
        <div className={Styles.position}>
        <button className={Styles.circle}> <img src="/images/circle_one.svg" height ="150px" width="145px" /></button>
        <button className={Styles.circle}> <img src="/images/circle_two.svg" height ="150px" width="145px" /></button>
        <button className={Styles.circle}> <img src="/images/circle_three.svg" height ="150px" width="145px" /></button>
        <button className={Styles.circle}> <img src="/images/circle_four.svg" height ="150px" width="145px" /></button>
    </div>
    <div className={Styles.subtext}>
        <h1 className={Styles.a}>Before Sunrise</h1>
        <h1 className={Styles.b}>Dear Ex</h1>
        <h1 className={Styles.c}>Desconectados</h1>
        <h1 className={Styles.d}>Lykke-Per</h1>
    </div>
    <div className={Styles.positionb}>
        <button className={Styles.circle}> <img src="/images/circle_five.svg" height ="150px" width="145px" /></button>
        <button className={Styles.circle}> <img src="/images/circle_six.svg" height ="150px" width="145px" /></button>
        <button className={Styles.circle}> <img src="/images/circle_seven.svg" height ="150px" width="145px" /></button>
        <button className={Styles.circle}> <img src="/images/circle_eight.svg" height ="150px" width="145px" /></button>
    </div>
    <div className={Styles.subtext}>
        <h1 className={Styles.e}>Mommy</h1>
        <h1 className={Styles.f}>The Beach</h1>
        <h1 className={Styles.g}>The misfits club </h1>
        <h1 className={Styles.h}>The Ramen Girl</h1>
    </div>

   
    </div>
}

export default Listing;