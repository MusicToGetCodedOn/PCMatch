import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funktion, um das Menü umzuschalten
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerTitle}>PCMatch</Link>

      
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      
      {/* Navigation, zeigt sich nur bei geöffnetem Menü */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link to="/builder/" className={styles.homeButton}>Builder</Link>
        <Link to="/completedbuilds/" className={styles.homeButton}>Completed Builds</Link>
        <Link to="/products/" className={styles.homeButton}>Products</Link>
      </nav>
    </header>
  );
}
