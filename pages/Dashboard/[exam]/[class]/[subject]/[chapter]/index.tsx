import { useRouter } from 'next/router';
import styles from './chapter.module.scss';

export default function Subject() {
    const Router = useRouter()

    if (!Router.query.chapter) {
        return <h1>Loading...</h1>
    }
    
    const chapter: string = Router.query.chapter.toString();
    const subject: string = Router.query.subject.toString();
    const Class: string = Router.query.class.toString();
    const exam: string = Router.query.exam.toString();

    return (
        <div className={"container " + styles.chapter}>
            {/* {exam === "JEE" ? <Toggler jee Class={Class} subject={subject} /> : ""}
            {exam === "NEET" ? <Toggler neet Class={Class} subject={subject} /> : ""} */}

            <h1>Hey! There</h1>
            <h2>&nbsp;It's all About {chapter} </h2>
            <br />
            
        </div>
    )
}
