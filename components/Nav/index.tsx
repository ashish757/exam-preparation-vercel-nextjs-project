import { useContext } from 'react'

import DataLayer from "../../DataLayer";
import styles from "./Nav.module.scss";
import {Home, Shuttle} from '../Icons'
import Logo from "../Logo"
import Link from 'next/link';

export default function Nav() {
    const { state, dispatch }: any = useContext(DataLayer);

    const menu = [
        { id: 0, url: "/", text: "Home", icon: Home},
        { id: 1, url: "/#QuickStart", text: "Quick Start", icon: Shuttle},
    ]

    const navHandler = (data: boolean) => {
        dispatch({type: "MOB_NAV_ACTIVE", payload: {mobNavActive: data}})
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.start}>
                <div className={styles.menuToggler}>
                    <button onClick={() => navHandler(true)}>
                        <svg height="35" fill="#fff" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    </button>
                </div>
                <Logo />
            </div>
            <div className={state.mobNavActive ? `${styles.mobNav} ${styles.center}` : styles.center}>
                <span className={styles.header}>
                    <div className={styles.menuToggler}>
                        <button onClick={() => navHandler(false)}>
                            <svg height="35" fill="#fff" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </button>
                    </div>
                        <Logo />
                    </span>
            
                
                <ul className={styles.navLinks}>
                    {
                        menu.map(option => {
                            return (
                                <Link href={option.url} key={option.id} >
                                    <li onClick={() => navHandler(false)} className={styles.navLink} >{<option.icon />}&nbsp;{option.text}</li>
                                </Link>
                            )
                        })
                    }
            
                </ul>
            </div>
            <div className={styles.end}>
                <div className={styles.ButtonGroup}>
                    <button> Log in </button>
                    <button> Donate </button>
                </div>
            </div>    
            
        </nav>
    )
}
