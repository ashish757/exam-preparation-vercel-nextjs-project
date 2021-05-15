import styles from './Chapters.module.scss';
import Chapter from '../Chapter';
import { useState, useContext } from 'react';
import DataLayer from '../../../DataLayer';

interface propTypes {
    jee?: boolean,
    neet?: boolean,
    subject: string,
    Class: string
}
export default function index({ jee, neet, Class, subject }: propTypes) {
    const [activeChapter, setActiveChapter] = useState()
    const chapterHandler = id => {
        setActiveChapter(prev => {
            if (prev === id) return;
            return id
        })
    }


    const { state: {
        jeeClass11Chapters,
        jeeClass12Chapters,
        neetClass11Chapters,
        neetClass12Chapters, } }: any = useContext(DataLayer);

    const chapters: any = () => {
        if (jee) {
            if (Class === 'class-11') return jeeClass11Chapters[subject]
            else if (Class === 'class-12') return jeeClass12Chapters[subject]
        }
        else if (neet) {
            if (Class === 'class-11') return neetClass11Chapters[subject]
            else if (Class === 'class-12') return neetClass12Chapters[subject]
        }
        return 'ERROR'
    }
    let url = `/Dashboard/${jee ? "JEE" : "NEET"}/${Class}/${subject}`;
  
    return (
        <div className={styles.chapters}>
            <div className={styles.start}>
                {
                    chapters().slice(0, Math.ceil(chapters().length / 2)).map((chapter, index) => {
                        return <Chapter url={`${url}/${chapter.title}`} chapterNumber={index + 1} id={chapter.id} key={chapter.id} title={chapter.title} handler={chapterHandler} activeId={activeChapter} />
                    })
                }
            </div>
            <div className={styles.end}>
                {
                    chapters().slice(Math.ceil(chapters().length / 2)).map((chapter, index) => {
                        return <Chapter url={`${url}/${chapter.title}`} chapterNumber={index + (Math.ceil(chapters().length / 2)) + 1} id={chapter.id} key={chapter.id} title={chapter.title} handler={chapterHandler} activeId={activeChapter} />
                    })
                }
            </div>
        </div>
    )
}

