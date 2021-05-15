import styles from './SubjectCard.module.scss';
import { ChevronRightSharp } from '@material-ui/icons';
import Link from 'next/link';
import { PlantMagnifying, Math, Atom, Relativity } from '../../Icons';
// CleanChemical, Calculator,  Chemical, Physics

interface propType {
    url: string,
    Icon?: any,
    title: string,
}

export default function index({ url, title, Icon }: propType) {
    
    const icons = [
        { id: 'chemistry', icon: Atom },
        { id: 'biology', icon: PlantMagnifying },
        { id: 'physics', icon: Relativity },
        { id: 'maths', icon: Math },
    ]

    const FallBack = icons.find(icon => icon.id === title.toLowerCase() )    

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                {
                    Icon ? <Icon /> : <FallBack.icon />
                }
 
                <h3>{ title }</h3>
            </div>
            <div className={styles.stats}>
                <div>
                    <h3>34</h3>
                    <h4>Chapters</h4>
                </div>
                <div>
                    <h3>Notes</h3>
                    <h4>Chapter-wise</h4>
                </div>
                <div>
                    <h3>Questions</h3>
                    <h4>Chapter-wise</h4>
                </div>
                <div>
                    <h3>34</h3>
                    <h4>Chapters</h4>
                </div>
            </div>
            <Link href={url}>
                <div className={styles.link}>
                    <ChevronRightSharp /> <ChevronRightSharp />
                </div>    
            </Link>
         </div>
    )
}
