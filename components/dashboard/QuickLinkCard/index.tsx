import styles from './QuickLinkCard.module.scss';
import Link from 'next/link';
import { BrainIdea, WritingPaper, PracticePaper, Effort } from '../../Icons';

interface prop {
    url: string,
    text: string,
    Icon?: any,
    id?: string
}
export default function index({ url, text, Icon, id }: prop) {
    const icons = [
        {id: 'liveQuiz', icon: BrainIdea},
        { id: 'pyq', icon: WritingPaper},
        { id: 'dpp', icon: PracticePaper},
        { id: 'mayBeLater', icon: Effort},
    ]
    const GeneratedIcon: any = icons.find(icon => icon.id === id)

    return (
        <Link href={url}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    { Icon ? <Icon /> : GeneratedIcon ? <GeneratedIcon.icon /> : "" }
                    
                </div>
                <h3> {text} </h3>
            </div>
        </Link>
    )
}
