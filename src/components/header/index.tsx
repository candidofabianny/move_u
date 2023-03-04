import React from "react";
import Image from "next/image";
import Logo from "/public/images/Vector.svg"
import Title from "/public/images/logo_title.svg"
import Link from "next/link";
import Styles from "./header.module.scss";

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.logo}>
            <Image src={Logo} alt={""} />

        </div>
        <div className={Styles.menu}>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Listing</Link>
                <Link href="/">Contact</Link>
        </div>
        <div className={Styles.buttonAction}>
                <button className={Styles.buttonshare}>Share it</button>
        </div>
    </div>

}

export default Header; 