import { useState } from 'react';
import Graphicscards from '../data/video-card.json';
import styles from './Card.module.css';

export default function Card() {
  // State für die Anzahl der sichtbaren Karten
  const [visibleCards, setVisibleCards] = useState(12);

  // Funktion zum Anzeigen von 10 weiteren Karten
  const loadMore = () => {
    setVisibleCards(prev => prev + 10); // Erhöht die sichtbaren Karten um 10
  };

  return (
    <div>
        <div className={styles.Grid}> 
      {Graphicscards.slice(0, visibleCards).map((graphicscard) => (
        <CardItem key={graphicscard.name} data={graphicscard} />
      ))}
        </div>

      {visibleCards < Graphicscards.length && (
        <button onClick={loadMore} className={styles.loadMoreBtn}>
          mehr anzeigen
        </button>
      )}
    </div>
  );
}

// Unterkomponente für jede einzelne Karte
function CardItem({ data }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className={styles.Card}>
      <h3>{data.name}</h3>
      <p><strong>Chipset: </strong>{data.chipset}</p>
      <p><strong>Verkaufspreis: </strong>{data.price} $</p>

      {showMore && (
        <>
          <p><strong>Speicher:</strong> {data.memory} GB</p>
          <p><strong>Standart Taktfrequenz:</strong> {data.core_clock} Mhz</p>
          <p><strong>Übertaktet:</strong> {data.boost_clock} Mhz</p>
          <p><strong>Farbe:</strong> {data.color}</p>
          <p><strong>Länge</strong> {data.length} mm</p>
        </>
      )}

      <button onClick={() => setShowMore(prev => !prev)}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>
    </article>
  );
}
