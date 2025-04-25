import { useState } from 'react';
import Os from '../data/os.json';
import styles from './Card.module.css'
import Button from './Button';
import SearchBar from './SearchBar';

export default function OsCard() {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
    
    const OsWithIds = Os.map((card, index) => ({
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


  const filteredCards = OsWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <h2>Betriebssysteme</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Wir haben wohl nichts, was "{searchQuery}" heisst.</p>
      )}

       <div className={styles.Grid}> 
                       {filteredCards.slice(0, visibleCards).map((os) => (
                         <CardItem key={os.id} data={os} />
                       ))}
                     </div>

      {visibleCards < filteredCards.length && (
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
      <p><strong>Verkaufspreis: </strong>{' '}
      {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)}  CHF` : 'n/A'}
      </p>
      <p><strong>Modus: </strong>{' '}
      {data.mode ? `${data.mode}-bit` : 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Maximaler RAM:</strong>{' '}
          {data.max_memory ? `${data.max_memory}` : 'n/A'} </p>
          
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>

      
    </article>
  );
}