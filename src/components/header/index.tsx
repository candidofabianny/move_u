import React from "react";
import Image from "next/image";
import Logo from "/public/images/Vector.svg"
import Link from "next/link";
import Styles from "./header.module.css";
import {linkRel} from 'link-rel'

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.logo}>
            <Image src={Logo} alt={"logo"} />

        </div>
        <div className={Styles.menu}>
            <nav>
                <Link href="/">Home </Link>
                <Link href="/" >About </Link>
                <Link href="/">Listing </Link>
                <Link href="/">Contact </Link>
                </nav>
        </div>
        <div className={Styles.buttonAction}>
                <button className={Styles.buttonshare}>Share it</button>
        </div>
    </div>

}

export default Header; 