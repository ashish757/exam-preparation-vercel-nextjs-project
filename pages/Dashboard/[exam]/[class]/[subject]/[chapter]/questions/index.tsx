import { useRouter } from 'next/router';
import styles from './questions.module.scss';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import NumberBar from '../../../../../../../components/questions/numberBar';
import Questions from '../../../../../../../components/questions/question';

export default function Index() {
    const Router = useRouter()
    const sliderRef: { current } = useRef();
    const startingPoint: { current } = useRef(0);
    const [current, setCurrent] = useState(0);
    const [extra, setExtra] = useState(0);

    if (!Router.query.chapter) {
        return <h1>Loading...</h1>
    }
    const chapter: string = Router.query.chapter.toString();
    const subject: string = Router.query.subject.toString();
    const Class: string = Router.query.class.toString();
    const exam: string = Router.query.exam.toString();


    const nextHandler = () => {
        let questions = Array.from(sliderRef.current.children);
        if (current >= questions.length - 1) return;
        setCurrent(prev => prev + 1);
    }
    const prevHandler = () => {
        if (current <= 0) return;
        setCurrent(prev => prev - 1)
    }

    const QuestionJump = (queNumber: number) => {
        setCurrent(queNumber - 1)
    }
    const TouchSlider = (e) => {
        if (e.type === 'touchstart') startingPoint.current = e.changedTouches[0].clientX;
        if (e.type === 'touchend') {
            if (extra >= 30) setCurrent(prev => prev - 1);
            if (extra <= -30) setCurrent(prev => prev + 1);
            setExtra(0); return;
        }
        if (startingPoint.current > e.changedTouches[0].clientX) {
            let questions = Array.from(sliderRef.current.children);
            if (current >= questions.length - 1) return;

            setExtra(Math.floor((e.changedTouches[0].clientX - startingPoint.current) / 3))
        }
        else if (startingPoint.current < e.changedTouches[0].clientX) {
            if (current <= 0) return;

            setExtra(Math.floor((e.changedTouches[0].clientX - startingPoint.current) / 3))

        }
    }
    return (
        <div className={styles.questionsContainer}>
            <NumberBar current={current} handler={QuestionJump} />

            <div className={styles.questions}>
                <div className={styles.sliderContainer} >
                    <div ref={sliderRef} className={styles.slider} style={{ transform: `translateX(${(-current * 100) + extra}%)` }} >
                        <Questions TouchSlider={TouchSlider} current={current} />
                    </div>
                    <button className={styles.next} onClick={nextHandler}><svg viewBox="0 0 24 24" ><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></button>
                    <button className={styles.prev} onClick={prevHandler}><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg></button>
                </div>
            </div>

            <div className={styles.footer}>
                <span className={styles.solution}>Solution</span>
                <span className={styles.report}>Report</span>
            </div>
        </div>
    )
}
