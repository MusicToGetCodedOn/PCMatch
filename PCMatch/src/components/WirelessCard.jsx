import { useState } from 'react';
import WirelessCard from '../data/wired-network-card.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

export default function WirelessNtkCard() {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  
  const WirelessCardWithIds = WirelessCard.map((card, index) => ({
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

  const filteredCards = WirelessCardWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
    
  );
  

  return (
    <div>
      <h2>Wireless Network Cards</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Sorry, but we couldn't find "{searchQuery}"..</p>
      )}

      <div className={styles.Grid}> 
        {filteredCards.slice(0, visibleCards).map((wiredcard) => (
          <CardItem key={wiredcard.id} data={wiredcard} />
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

function CardItem({ data }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className={styles.Card}>
      <h3>{data.name}</h3>
      <p><strong>Retailprice:</strong> {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}</p>
      <p><strong>Protocol:</strong> {data.protocol || 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Interface:</strong> {data.interface || 'n/A'}</p>
          <p><strong>Color:</strong> {data.color || 'n/A'}</p>
          
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </article>
  );
}
