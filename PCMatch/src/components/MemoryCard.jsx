import { useState } from 'react';
import Memory from '../data/memory.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

export default function MemoryCard() {
    const [visibleCards, setVisibleCards] = useState(12);
    const [searchQuery, setSearchQuery] = useState("");
      
      const MemoryWithIds = Memory.map((card, index) => ({
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

    const filteredCards = MemoryWithIds.filter(card =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
          <h2 id="memory">Memory</h2>


          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Sorry, but we couldn't find "{searchQuery}".</p>
      )}

        <div className={styles.Grid}> 
                        {filteredCards.slice(0, visibleCards).map((memory) => (
                          <CardItem key={memory.id} data={memory} />
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
      <p><strong>Retailprice: </strong>{''}
       {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}
      </p>
      <p>
  <strong>Count:</strong>{' '}
  {Array.isArray(data.modules) && data.modules.length === 2
    ? `${data.modules[0]}x ${data.modules[1]} GB`
    : 'n/A'}
</p>
      

      {showMore && (
        <>
        <p>
  <strong>Speed:</strong>{' '}
  {Array.isArray(data.speed) && data.speed.length === 2
    ? `DDR${data.speed[0]}-RAM`
    : 'n/A'}
</p>
<p>
  <strong>Clock frequency:</strong>{' '}
  {Array.isArray(data.speed) && data.speed[1]
    ? `${data.speed[1]} MHz`
    : 'n/A'}
</p>
          <p>
  <strong>Price / GB: </strong>{' '}
  {data.price_per_gb ? `${(data.price_per_gb * 0.83 ).toFixed(2)} CHF` : 'n/A'} 
</p>
          <p><strong>FWL:</strong>{' '}
          {data.first_word_latency ? `${data.first_word_latency} ns` : 'n/A'}</p>
          <p><strong>CAS Latency:</strong>{' '}
          {data.cas_latency ? `${data.cas_latency}` : 'n/A'}</p>
          
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </article>
  );
}