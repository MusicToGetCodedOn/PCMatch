import { useState } from 'react';
import Motherboards from '../data/motherboard.json';
import styles from './Card.module.css'
import Button from './Button';
import SearchBar from './SearchBar';

export default function MotherboardCard() {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
    
    const MotherboardsWithIds = Motherboards.map((card, index) => ({
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


  const filteredCards = MotherboardsWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.socket.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <h2>Motherboards</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Wir haben wohl nichts, was "{searchQuery}" heisst.</p>
      )}

        <div className={styles.Grid}> 
                        {filteredCards.slice(0, visibleCards).map((motherboard) => (
                          <CardItem key={motherboard.id} data={motherboard} />
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
      <p><strong>Socket: </strong>{' '}
      {data.socket ? `${data.socket}` : 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Form:</strong>{' '}
          {data.form_factor ? `${data.form_factor}` : 'n/A'} </p>
          <p>
            <strong>Maximaler RAM:</strong>{' '}
            {data.max_memory ? `${data.max_memory} GB` : 'n/A'}</p>
          <p>
  <strong>RAM Slots:</strong>{' '}
  {data.memory_slots ? `${data.memory_slots}` : 'n/A'}
</p>
          <p><strong>Farbe:</strong>{' '}
           {data.color ?`${data.color}` : 'n/A'}</p>
          
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>

      
    </article>
  );
}