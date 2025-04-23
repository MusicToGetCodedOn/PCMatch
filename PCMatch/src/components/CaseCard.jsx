import { useState } from 'react';
import Cases from '../data/case.json';
import styles from './VideoCardCard.module.css';
import Button from './Button';

export default function CaseCard() {
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

    return (
        <div>
          <h2>Gehäuse</h2>
        <div className={styles.Grid}> 
      {Cases.slice(0, visibleCards).map((shell) => (
        <CardItem key={shell.name} data={shell} />
      ))}
        </div>
    
          {visibleCards < Cases.length && (
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
      <p><strong>Gehäuse Typ: </strong>{data.type}</p>
      <p><strong>Verkaufspreis: </strong>{data.price} $</p>

      {showMore && (
        <>
          <p><strong>Side Panel:</strong> {data.side_panel}</p>
          <p><strong>Aussen Volumen:</strong> {data.external_volume} cm</p>
          <p><strong>Innen Volumen:</strong> {data.internal_35_bays} cm</p>
          <p><strong>Farbe:</strong> {data.color}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}