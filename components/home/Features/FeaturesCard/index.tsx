import React from 'react';
import styles from "./FeaturesCard.module.scss";
import { Home } from '@material-ui/icons';

export default function FeaturesCard({ bg, title, text }) {
    return (
        <div className={styles.card} style={{background: "inherit"}} >
            <div className={styles.top}>
                <div className={styles.icon}><Home /></div>
                <div className={styles.title}> {title} </div>
            </div>
            <div className={styles.bottom}> {text} </div>
        </div>
    )
}
