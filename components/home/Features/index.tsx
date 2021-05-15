import { useContext } from 'react'
import DataLayer from "../../../DataLayer";
import styles from './Features.module.scss';
import Card from "./FeaturesCard"


export default function Features() {

    const { state }:any = useContext(DataLayer);

    return (
        <section className={"container " + styles.features} id="Features">
            <h1>What makes us different </h1>
            <div className={styles.cards} >
                {
                    state.features.map(f => {
                        return <Card key={f.id} title={f.title} text={f.text} bg={f.color} />
                    })

                }
               
            </div>

        </section>
    )
}
