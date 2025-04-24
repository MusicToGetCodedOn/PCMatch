import { useState } from 'react';
import Cooler from '../data/cpu-cooler.json';
import styles from './VideoCardCard.module.css'
import Button from './Button';


export default function CpuCoolerCard() {
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
        <h2>CPU Kühler</h2>
        <div className={styles.Grid}> 
      {Cooler.slice(0, visibleCards).map((cooler) => (
        <CardItem key={cooler.name} data={cooler} />
      ))}
        </div>

      {visibleCards < Cooler.length && (
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
      <p><strong>Verkaufspreis: </strong>{data.price} $</p>
      <p><strong>rpm </strong>{data.rpm}</p>

      {showMore && (
        <>
          <p><strong>Lautstärke:</strong> {data.noise_level} dB</p>
          <p><strong>Farbe:</strong> {data.color} </p>
          <p>
            <strong>Grösse:</strong>{' '}
            {data.size && data.size !== 'null' ? data.size : 'Keine integrierte Grafik'}
          </p>
          
          </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}
