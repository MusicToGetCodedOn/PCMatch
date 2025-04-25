import { useState } from 'react';
import Graphicscards from '../data/video-card.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

import videocard from '../assets/videocard.png';
export default function GpuCard({handleNext}) {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  
  const GraphicscardsWithIds = Graphicscards.map((card, index) => ({
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

  const filteredCards = GraphicscardsWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.chipset.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div>
      <h2 id="gpu's">Graphics Cards</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Sorry, but we couldn't find "{searchQuery}".</p>
      )}

      <div className={styles.Grid}> 
        {filteredCards.slice(0, visibleCards).map((graphicscard) => (
          <CardItem key={graphicscard.id} data={graphicscard} handleNext={handleNext} />
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

function CardItem({ data, handleNext }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className={styles.Card} onClick={() => handleNext(data)}>
      <img src={videocard} />
      <h3>{data.name}</h3>
      <p><strong>Chipset:</strong> {data.chipset || 'n/A'}</p>
      <p><strong>Retailprice:</strong> {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Memory:</strong> {data.memory ? `${data.memory} GB` : 'n/A'}</p>
          <p><strong>clock frequency:</strong> {data.core_clock ? `${data.core_clock} MHz` : 'n/A'}</p>
          <p><strong>clock frequency overclocked:</strong> {data.boost_clock ? `${data.boost_clock} MHz` : 'n/A'}</p>
          <p><strong>Color:</strong> {data.color || 'n/A'}</p>
          <p><strong>Length:</strong> {data.length ? `${data.length} mm` : 'n/A'}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </article>
  );
}
