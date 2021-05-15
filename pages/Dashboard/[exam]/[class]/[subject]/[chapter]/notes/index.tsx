import { useRouter } from 'next/router';
import styles from './notes.module.scss';

export default function Notes() {

    const Router = useRouter()

    if (!Router.query.chapter) {
        return <h1>Loading...</h1>
    }

    const chapter: string = Router.query.chapter.toString();
    const subject: string = Router.query.subject.toString();
    const Class: string = Router.query.class.toString();
    const exam: string = Router.query.exam.toString();

    return (
        <div className={'container ' + styles.notes}>
            <h1>{chapter}</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus odit quos, eos unde, consectetur magni placeat officiis corrupti eveniet cum maxime veniam aliquid rem. Omnis vel unde eos molestiae rerum!
            </p>
        </div>
    )
}
