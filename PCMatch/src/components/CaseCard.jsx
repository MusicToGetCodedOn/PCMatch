import { useState } from 'react';
import Cases from '../data/case.json';
import styles from './Card.module.css';
import Button from './Button';

export default function CaseCard({ searchQuery = "" }) {
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

    const filteredCards = Cases.filter(card =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
          <h2>Gehäuse</h2>
        <div className={styles.Grid}> 
      {filteredCards.slice(0, visibleCards).map((shell) => (
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
      <p><strong>Verkaufspreis: </strong> 
       {(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF
      </p>

      {showMore && (
        <>
          <p><strong>Side Panel:</strong> {data.side_panel}</p>
          <p><strong>Aussen Volumen:</strong> {data.external_volume} cm/3</p>
          <p><strong>3.5" Laufwerkschäfte:</strong> {data.internal_35_bays}x</p>
          <p><strong>Farbe:</strong> {data.color}</p>
        </>
      )}
      <Button onClick={() => window.open("https://www.digitec.ch/de/s1/tag/gehaeuse-524", "_blank") }>
  Kaufen
</Button>
      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}