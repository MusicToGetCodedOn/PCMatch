import { useState } from 'react';
import Graphicscards from '../data/video-card.json';
import styles from './Card.module.css'
import Button from './Button';

export default function GpuCard({ searchQuery = "" }) {
  const [visibleCards, setVisibleCards] = useState(12);

  
  const loadMore = () => {
    setVisibleCards(prev => prev + 12); 
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const filteredCards = Graphicscards.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.chipset.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <h2>Grafikkarten</h2>
        <div className={styles.Grid}> 
      {filteredCards.slice(0, visibleCards).map((graphicscard) => (
        <CardItem key={graphicscard.name} data={graphicscard} />
      ))}
        </div>

      {visibleCards < Graphicscards.length && (
        
        <Button onClick={loadMore} className={styles.loadMoreBtn}>
          mehr anzeigen
        </Button>
        
      )}
      <Button onClick={scrollToTop} className={styles.scrollToTopBtn}>
        Nach oben
      </Button>
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
      <p><strong>Verkaufspreis: </strong> 
       {(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF
      </p>

      {showMore && (
        <>
          <p><strong>Speicher:</strong> {data.memory} GB</p>
          <p><strong>Standart Taktfrequenz:</strong> {data.core_clock} Mhz</p>
          <p><strong>Übertaktet:</strong> {data.boost_clock} Mhz</p>
          <p><strong>Farbe:</strong> {data.color}</p>
          <p><strong>Länge</strong> {data.length} mm</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>

      
    </article>
  );
}