import { useState } from 'react';
import Processor from '../data/cpu.json';
import styles from './VideoCardCard.module.css'

export default function CpuCard() {
  const [visibleCards, setVisibleCards] = useState(12);

  
  const loadMore = () => {
    setVisibleCards(prev => prev + 12); 
  };


  return (
    <div>
        
        <div className={styles.Grid}> 
      {Processor.slice(0, visibleCards).map((processor) => (
        <CardItem key={processor.name} data={processor} />
      ))}
        </div>

      {visibleCards < Processor.length && (
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
      <p><strong>Verkaufspreis: </strong>{data.price} $</p>
      <p><strong>Cores: </strong>{data.core_count}</p>

      {showMore && (
        <>
          <p><strong>Standart Taktfrequenz:</strong> {data.core_clock} GHz</p>
          <p><strong>Übertaktet:</strong> {data.boost_clock} GHz</p>
          <p><strong>Farbe:</strong> {data.tdp} W</p>
          <p>
            <strong>Integrierte Grafik:</strong>{' '}
            {data.graphics && data.graphics !== 'null' ? data.graphics : 'Keine integrierte Grafik'}
          </p>
          <p><strong>Multithreading:</strong> {data.smt ? "ja" : "nein"}</p>
        </>
      )}

      <button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>
    </article>
  );
}
