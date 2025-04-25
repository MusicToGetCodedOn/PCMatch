import { useState } from 'react';
import CaseFans from '../data/case-fan.json';
import styles from './Card.module.css'
import Button from './Button';
import SearchBar from './SearchBar';


export default function CasefanCard() {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
    
    const CaseFansWithIds = CaseFans.map((card, index) => ({
      ...card,
      id: index + 1
    }));
  
  const loadMore = () => {
    setVisibleCards(prev => prev + 12); 
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

    const filteredCards = CaseFansWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
    
  );

  return (
    <div>
      <h2 id="fans">Fans</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Sorry, but we couldn't find "{searchQuery}".</p>
      )}

        <div className={styles.Grid}> 
                {filteredCards.slice(0, visibleCards).map((casefan) => (
                  <CardItem key={casefan.id} data={casefan} />
                ))}
              </div>

      {visibleCards < filteredCards.length && (
                  <Button onClick={loadMore} className={styles.loadMoreBtn}>
                   Show more
                  </Button>
                )}

      <Button onClick={scrollToTop} className={styles.scrollToTopBtn}>
        Go up
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
      <p><strong>Retailprice: </strong>{''}
       {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}
      </p>
      <p><strong>Size:</strong>{' '} 
      {data.size ? `${data.size} mm` : 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Color: </strong>{''}
          {data.color? `${data.color}` : 'n/A'}</p>
          <p>
  <strong>Rpm:</strong>{' '}
  {Array.isArray(data.rpm) ? data.rpm.join(', ') : data.rpm || 'n/A'}
</p>
<p>
  <strong>Airflow:</strong>{' '}
  {Array.isArray(data.airflow) && data.airflow.length
    ? `${data.airflow.join(', ')} CFM`
    : data.airflow
    ? `${data.airflow} CFM`
    : 'n/A'}
</p>
<p>
  <strong>Noise level:</strong>{' '}
  {Array.isArray(data.noise_level) && data.noise_level.length
    ? `${data.noise_level.join(', ')} dB`
    : data.noise_level
    ? `${data.noise_level} dB`
    : 'n/A'}
</p>
          <p><strong>PWM:</strong> {data.pwm ? "Yes" : "No"}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>

      
    </article>
  );
}