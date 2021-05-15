import styles from './class.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router';

// COMPPONENTS
import Card from '../../../../components/dashboard/QuickLinkCard';
import SubjectCard from '../../../../components/dashboard/SubjectCard';

export default function Index() {

    const Router = useRouter()
    if (!Router.query.exam || !Router.query.class ) {
        return <h1>Loading...</h1>
    }
    const Class: string = Router.query.class.toString()
    const Exam: string = Router.query.exam.toString()

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
        <div className={styles.class}>
            <div className={styles.toggleLinks}>
                {/* <ButtonGroup variant="contained" color="secondary"> */}
                <Link href={`/Dashboard/${Exam}/class-11`}>
                    <button className={Class === 'class-11' ? styles.activeClass : ''}>CLASS 11</button>
                </Link>
                <Link href={`/Dashboard/${Exam}/class-12`}>
                    <button className={Class === 'class-12' ? styles.activeClass : ''} >CLASS 12</button>
                </Link>
                {/* </ButtonGroup> */}
            </div>
            <div className={styles.quickLinkCards}>
                <Card url="/" text="Live Quiz" id="liveQuiz"/>
                <Card url="/" text="PYQs" id="pyq"/>
                <Card url="/" text="Live Quiz" id="mayBeLater" />
                <Card url="/" text="DPP" id="dpp" />
            </div>
            <div className={styles.subjectCards}>
                {
                    Exam === 'JEE' ? (
                        JEE.map(({ id, title }) => (
                            <SubjectCard key={id} url={`/Dashboard/JEE/${Class}/${title}`} title={title} />
                        ))
                    ) : ""
                }
                {
                    Exam === 'NEET' ? (
                        NEET.map(({id, title}) => (
                            <SubjectCard key={id} url={`/Dashboard/NEET/${Class}/${title}`} title={title} />
                        ))
                    ) : ""
                }

            </div>
        </div>
    )
}
