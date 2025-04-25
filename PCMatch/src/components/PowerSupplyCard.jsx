import { useState } from 'react';
import Powersupplies from '../data/power-supply.json';
import styles from './Card.module.css';
import Button from './Button';
import SearchBar from './SearchBar';

export default function PowerSupplyCard({handleNext}) {
  const [visibleCards, setVisibleCards] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  
  const PowersuppliesWithIds = Powersupplies.map((card, index) => ({
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

  const filteredCards = PowersuppliesWithIds.filter(card =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div>
      <h2 id="powersupplies">Powersupplies</h2>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {filteredCards.length === 0 && searchQuery && (
        <p className={styles.noResults}>Sorry, but we couldn't find "{searchQuery}".</p>
      )}

      <div className={styles.Grid}> 
        {filteredCards.slice(0, visibleCards).map((powersupplies) => (
          <CardItem key={powersupplies.id} data={powersupplies} handleNext={handleNext}/>
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
      <h3>{data.name}</h3>
      <p><strong>Retailprice:</strong> {data.price ? `${(Math.round(data.price * 0.83 / 0.05) * 0.05).toFixed(2)} CHF` : 'n/A'}</p>
      <p><strong>Type:</strong> {data.type || 'n/A'}</p>

      {showMore && (
        <>
          <p><strong>Certificate:</strong> {data.efficiency ? `${data.efficiency}` : 'n/A'}</p>
          <p><strong>Wattage:</strong> {data.wattage ? `${data.wattage} W` : 'n/A'}</p>
          <p><strong>Modular:</strong> {data.modular ? `${data.modular}` : 'n/A'}</p>
          <p><strong>Color:</strong> {data.color || 'n/A'}</p>
        </>
      )}

      <Button onClick={() => setShowMore(prev => !prev)} className={styles.showMoreBtn}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </article>
  );
}
