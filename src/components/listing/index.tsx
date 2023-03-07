import React from "react";
import Image from "next/image";
import Styles from "./listing.module.css"
import Background from "/public/images/listing_images.svg"


const Listing = () => {
    return <div className={Styles.container}>
        <h1 className={Styles.title}>MoveU List</h1>
        <div className={Styles.image}>
        <Image src={Background} alt={"Before Sunrise Image"} />
        </div>
    <div className={Styles.subtext}>
        <h1 className={Styles.a}>Before Sunrise</h1>
        <h1 className={Styles.b}>Dear Ex</h1>
        <h1 className={Styles.c}>Desconectados</h1>
        <h1 className={Styles.d}>Lykke-Per</h1>
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