import { useState } from 'react';
import CaseFans from '../data/case-fan.json';
import styles from './VideoCardCard.module.css'
import Button from './Button';
import { div } from 'framer-motion/client';

export default function CasefanCard() {
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
      <h2>Lüfter</h2>
        <div className={styles.Grid}> 
      {CaseFans.slice(0, visibleCards).map((casefan) => (
        <CardItem key={casefan.name} data={casefan} />
      ))}
        </div>

      {visibleCards < CaseFans.length && (
        
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
      <p><strong>Verkaufspreis: </strong>${data.price}</p>
      <p><strong>Grösse: </strong>{data.size} mm</p>

      {showMore && (
        <>
          <p><strong>Farbe: </strong>{data.color} </p>
          <p>
          <strong>Rpm:</strong>{""}
            {data.rpm && data.rpm !== 'null' ? data.rpm : 'n/A'}
          </p>
          <p><strong>Airflow:</strong> {data.airflow} CFM</p>
          <p><strong>lautstärke:</strong> {data.noise_level}dB</p>
          <p><strong>PWM:</strong> {data.pwm ? "ja" : "nein"}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>

      
    </article>
  );
}