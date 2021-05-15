import styles from './QuickStart.module.scss'
import Button from '@material-ui/core/Button'
import Link from 'next/link';
import {ShuttleColored} from '../../Icons'

const Card = ({title, url}) => {
    return (
        <div className={styles.card} >
            <h2>{title}</h2><br/>
            <h3>Start now to see a demo</h3><br />
            <Link href={url}>
                <button className={styles.cardButton} >Start now</button>
            </Link>
            <br />
        </div>
    );
} 


export default function QuickStart() {
    return (
        <section className={"container " + styles.quickStart} id="QuickStart">
            <h1 className={styles.title}><ShuttleColored />Quick Start</h1>
            <div className={styles.examType}>
                <div className={styles.neet}>
                    <h2>NEET</h2>
                    <div className={styles.neetCards}>
                        <Card title="Class 11" url="/Dashboard/NEET/class-11"/>
                        <Card title="Class 12" url="/Dashboard/NEET/class-12"/>
                    </div>
                </div>
                <div className={styles.jee}>
                    <h2>JEE</h2>
                    <div className={styles.jeeCards}>
                        <Card title="Class 11" url="/Dashboard/JEE/class-11"/>
                        <Card title="Class 12" url="/Dashboard/JEE/class-12"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
