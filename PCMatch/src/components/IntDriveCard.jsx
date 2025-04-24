import { useState } from 'react';
import Drives from '../data/internal-hard-drive.json';
import styles from './Card.module.css';
import Button from './Button';

export default function IntHardCard({ searchQuery = "" }) {
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

    const filteredCards = Drives.filter(card =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
          <h2>Gehäuse</h2>
        <div className={styles.Grid}> 
      {filteredCards.slice(0, visibleCards).map((drive) => (
        <CardItem key={drive.name} data={drive} />
      ))}
        </div>
    
          {visibleCards < Drives.length && (
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


function CardItem({ data }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className={styles.Card}>
      <h3>{data.name}</h3>
      <p><strong>Verkaufspreis: </strong> 
       {(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF
      </p>
      
      <p><strong>Speicher: </strong>{data.capacity} GB</p>
      

      {showMore && (
        <>
          <p>
  <strong>Preis pro GB: </strong>
  {(data.price_per_gb * 0.83 ).toFixed(2)} CHF
</p>
          <p><strong>Typ:</strong> {data.type}</p>
          <p><strong>Cache:</strong> {data.cache} MB</p>
          <p><strong>form:</strong> {data.form_factor}</p>
          <p><strong>Interface:</strong> {data.interface}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}