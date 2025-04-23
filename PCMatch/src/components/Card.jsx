import Graphicscards from '../data/video-card.json';
import styles from './Card.module.css';

export default function Card(){
    return (
Graphicscards.map(graphicscard =>{
    return (
        <article className={styles.Card}>
            
            <h3>{graphicscard.name}</h3>
            <p>{graphicscard.chipset}</p>
            <p>{graphicscard.price} $</p>
            <p>{graphicscard.memory} gb</p>


        </article>

    )
})
)
}