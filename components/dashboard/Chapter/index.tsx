import styles from './Chapter.module.scss';
import Link from 'next/link';
import { WritingPaper, Effort } from '../../Icons';

interface prop {
    title: string,
    handler: any,
    id: number | string,
    url: string,
    activeId: number,
    chapterNumber: number
}
export default function index({ title, handler, id, activeId, chapterNumber, url }: prop) {
    return (
        <div className={activeId === id ? `${styles.chapter} ${styles.active}` : styles.chapter} onClick={() => handler(id)}>
            <div className={styles.top} >
                <div className={styles.start} >
                    <h3 className={styles.chapterNumber}>{chapterNumber}.</h3>&nbsp;&nbsp;&nbsp;

                    <h1 className={styles.title}>{title}</h1>
                </div>
                <div className={styles.toggleIcon} >
                    <svg viewBox="0 0 50 25" height="8" width="15">
                        <polyline points="0,0 50,0 25,25"></polyline>
                    </svg>
                </div>
            </div>

            <div className={styles.bottom}>
                <Link href={`${url}/notes`}>
                    <div className={styles.notes}>
                        <div className={styles.icon}><WritingPaper /></div>
                        <div style={{ paddingLeft: 7}}>Chapter Notes</div>
                    </div>
                </Link>
                <Link href={`${url}/questions`}>
                    <div className={styles.practice}>
                        <div className={styles.icon}><Effort /></div>
                        <div>Start Practicing</div>
                    </div>
                </Link>
            </div>

        </div>
    )
}
