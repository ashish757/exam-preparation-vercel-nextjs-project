import { useRouter } from 'next/router';
import styles from './subject.module.scss';
import Toggler from '../../../../../components/dashboard/ToggleButton'
import Chapters from '../../../../../components/dashboard/Chapters'
import Link from 'next/link';


export default function Subject() {
    const Router = useRouter()

    if (!Router.query.subject) {
        return <h1>Loading...</h1>
    }
    
    const subject: string = Router.query.subject.toString();
    const Class: string = Router.query.class.toString();
    const exam: string = Router.query.exam.toString();

    return (
        <div className={"container " + styles.subject}>
            {exam === "JEE" ? <Toggler jee Class={Class} subject={subject} /> : ""}
            {exam === "NEET" ? <Toggler neet Class={Class} subject={subject} /> : ""}

            <h1>Hey! There</h1> 
            <h2>&nbsp;It's all About {subject}</h2>
            <br />
            { exam === "JEE" ? <Chapters jee Class={Class} subject={subject} /> : "" }
            { exam === "NEET" ? <Chapters neet Class={Class} subject={subject} /> : "" }
        </div>
    )
}
