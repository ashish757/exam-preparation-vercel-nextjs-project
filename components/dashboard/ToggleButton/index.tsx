import styles from './ToggleButton.module.scss';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

interface prop {
    jee?: boolean,
    neet?: boolean,
    subject: string,
    Class: string
}
export default function index({ jee, neet, subject, Class }: prop) {

    const NEET = [
        { id: 0, title: "Biology" },
        { id: 1, title: "Physics" },
        { id: 3, title: "Chemistry" },
    ]
    const JEE = [
        { id: 1, title: "Physics" },
        { id: 3, title: "Chemistry" },
        { id: 0, title: "Maths" },
    ]

    return (
        <div className={styles.subjectToggler}>
            {
                jee ? (
                    JEE.map(({ id, title }) => (
                        <Link href={`/Dashboard/JEE/${Class}/${title}`} key={id}>
                            <button className={subject === title ? styles.activeSubjectButton : ''}>{title}</button>
                        </Link>
                    ))
                ) : ""
            }
            {
                neet ? (
                    NEET.map(({ id, title }) => (
                        <Link href={`/Dashboard/NEET/${Class}/${title}`} key={id}>
                            <button className={subject === title ? styles.activeSubjectButton : ''}>{title}</button>
                        </Link>
                    ))
                ) : ""
            }
        </div>
    )
}
