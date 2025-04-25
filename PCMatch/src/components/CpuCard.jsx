import { useState } from 'react';
import Processor from '../data/cpu.json';
import styles from './Card.module.css'
import Button from './Button';
import SearchBar from './SearchBar';


export default function CpuCard({handleNext}) {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
    
    const ProcessorWithIds = Processor.map((card, index) => ({
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

  const filteredCards = ProcessorWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
    
  );

  return (
    <div>
        <h2 id="cpu's">Processors</h2>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Sorry, but we couldn't find "{searchQuery}".</p>
      )}

        <div className={styles.Grid}> 
                {filteredCards.slice(0, visibleCards).map((processor) => (
                  <CardItem key={processor.id} data={processor} handleNext={handleNext}/>
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
function CardItem({ data, handleNext }) {
  const [showMore, setShowMore] = useState(false);

 
  return (

        
    <article className={styles.Card} onClick={() => handleNext(data)}>
      <h3>{data.name}</h3>
      <p><strong>Retailprice: </strong>{''}
       {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}
      </p>
      <p><strong>Cores: </strong>{''}
      {data.core_count ? `${data.core_count}` : 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Clock frequency:</strong>{' '} 
          {data.core_clock ? `${data.core_clock} GHz` : 'n/A'}</p>
          <p><strong>Clock frequency overclocked:</strong>{' '}
           {data.boost_clock ? `${data.boost_clock} GHz` : 'n/A'}</p>
          <p><strong>Color:</strong>{' '}
          {data.tdp ? `${data.tdp} W` : 'n/A'}</p>
          <p>
            <strong>Integrated graphics:</strong>{' '}
            {data.graphics && data.graphics !== 'null' ? data.graphics : 'No'}
          </p>
          <p><strong>Multithreading:</strong> {data.smt ? "Yes" : "No"}</p>
          </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.loadMoreBtn}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </article>
  );
}
