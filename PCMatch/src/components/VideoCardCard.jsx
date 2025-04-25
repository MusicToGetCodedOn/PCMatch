import { useState } from 'react';
import Graphicscards from '../data/video-card.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

export default function GpuCard() {
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
      <h2>Grafikkarten</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Wir haben wohl nichts, was "{searchQuery}" heisst.</p>
      )}

      <div className={styles.Grid}> 
        {filteredCards.slice(0, visibleCards).map((graphicscard) => (
          <CardItem key={graphicscard.id} data={graphicscard} />
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
      <p><strong>Chipset:</strong> {data.chipset || 'n/A'}</p>
      <p><strong>Verkaufspreis:</strong> {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Speicher:</strong> {data.memory ? `${data.memory} GB` : 'n/A'}</p>
          <p><strong>Standart Taktfrequenz:</strong> {data.core_clock ? `${data.core_clock} MHz` : 'n/A'}</p>
          <p><strong>Übertaktet:</strong> {data.boost_clock ? `${data.boost_clock} MHz` : 'n/A'}</p>
          <p><strong>Farbe:</strong> {data.color || 'n/A'}</p>
          <p><strong>Länge:</strong> {data.length ? `${data.length} mm` : 'n/A'}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}
