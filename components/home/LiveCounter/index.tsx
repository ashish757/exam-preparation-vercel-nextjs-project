import styles from "./LiveCounter.module.scss"

const Card = ({ count, title}) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.count}>{count}</h1><br/>
            <h2 className={styles.title}>{title}</h2>
        </div>
    )
}

export default function LiveCounter() {
    return (
        <div className={"container " + styles.liveCounter}>
            <Card count="21000+" title="JEE & NEET Aspirants" />
            <Card count="10000+" title="Questions for Practice" />
        </div>
    )
}
