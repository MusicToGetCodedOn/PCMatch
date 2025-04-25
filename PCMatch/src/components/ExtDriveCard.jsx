import { useState } from 'react';
import Drives from '../data/external-hard-drive.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

export default function ExtDriveCard() {
    const [visibleCards, setVisibleCards] = useState(12);
    const [searchQuery, setSearchQuery] = useState("");
      
      const DrivesWithIds = Drives.map((card, index) => ({
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

    const filteredCards = DrivesWithIds.filter(card =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return (
        <div>
          <h2>Externer Speicher</h2>

          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Wir haben wohl nichts, was "{searchQuery}" heißt.</p>
      )}

        <div className={styles.Grid}> 
                {filteredCards.slice(0, visibleCards).map((drive) => (
                  <CardItem key={drive.id} data={drive} />
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


function CardItem({ data }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className={styles.Card}>
      <h3>{data.name}</h3>
      <p><strong>Verkaufspreis: </strong>{''}
       {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}
      </p>
      <p><strong>Speicher: </strong>{''}
      {data.capacity ? `${data.capacity} GB` : 'n/A'}
      </p>
      

      {showMore && (
        <>
          <p>
  <strong>Preis pro GB: </strong>{' '}
  {data.price_per_gb ? `${(data.price_per_gb * 0.83 ).toFixed(2)} CHF` : 'n/A'} 
</p>
          <p><strong>Typ:</strong>{' '}
          {data.type ? `${data.type}` : 'n/A'}</p>
          <p><strong>Cache:</strong>{' '}
          {data.cache ? `${data.cache} MB` : 'n/A'}</p>
          <p><strong>form:</strong>{' '}
          {data.form_factor ? `${data.form_factor}` : 'n/A'}</p>
          <p><strong>Interface:</strong>{''}
          {data.interface ? `${data.interface}` : 'n/A'}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}