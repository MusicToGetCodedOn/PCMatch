import { useState } from 'react';
import Cases from '../data/case.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

export default function CaseCard() {
    const [visibleCards, setVisibleCards] = useState(12);
    const [searchQuery, setSearchQuery] = useState("");
      
      const CasesWithIds = Cases.map((card, index) => ({
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

    const filteredCards = CasesWithIds.filter(card =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
          <h2>Gehäuse</h2>

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
      <p><strong>Gehäuse Typ: </strong>{' '}
      {data.type ? `${data.type}` : 'n/A'}</p>
      <p><strong>Verkaufspreis: </strong>{''}
       {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}
      </p>

      {showMore && (
        <>
          <p><strong>Side Panel:</strong>{' '}
          {data.side_panel ? `${data.side_panel}` : 'n/A'}</p>
          <p><strong>Aussen Volumen:</strong>{' '}
          {data.external_volume ? `${data.external_volume} cm/3` : 'n/A'}</p>
          <p><strong>3.5" Laufwerkschäfte:</strong>{' '}
          {data.internal_35_bays ? `${data.internal_35_bays}x` : 'n/A'}</p>
          <p><strong>Farbe:</strong>{''}
          {data.color ? `${data.color}` : 'n/A'}</p>
        </>
      )}
      <Button onClick={() => window.open("https://www.digitec.ch/de/s1/tag/gehaeuse-524", "_blank") }>
  Kaufen
</Button>
      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </Button>
    </article>
  );
}