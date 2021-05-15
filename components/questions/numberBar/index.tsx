import styles from './numberBar.module.scss';

export default function index({current, handler}) {
    return (
        <div className={styles.questionNumberBar}>
                <button className={current + 1 === 1 ? styles.active : ''} onClick={() => handler(1)}>1</button>
                <button className={current + 1 === 2 ? styles.active : ''} onClick={() => handler(2)}>2</button>
                <button className={current + 1 === 3 ? styles.active : ''} onClick={() => handler(3)}>3</button>
                <button className={current + 1 === 4 ? styles.active : ''} onClick={() => handler(4)}>4</button>
                <button className={current + 1 === 5 ? styles.active : ''} onClick={() => handler(5)}>5</button>
                <button className={current + 1 === 6 ? styles.active : ''} onClick={() => handler(6)}>6</button>
        </div>
    )
}
