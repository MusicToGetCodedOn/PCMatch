import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Funktion zum Umschalten des "Products"-Menüs (Grid anzeigen/ausblenden)
  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.headerTitle}>PCMatch</Link>

        <nav className={styles.nav}>
          
            <Link to="/builder/" className={styles.homeButton}>Builder</Link>
            <Link to="/completedbuilds/" className={styles.homeButton}>Builds</Link>
        
          {/* Button für das Ausklappen des Produktsmenüs */}
          <button className={styles.productsButton} onClick={toggleProducts}>Products</button>
        </nav>
      </header>

      {/* Das Grid wird nur angezeigt, wenn isProductsOpen wahr ist */}
      <div
        className={`${styles.productGrid} ${isProductsOpen ? styles.open : ''}`}
      >
        <div className={styles.grid}>
          <a href="/products/">Browse All</a>
          <a href="/products/casefans"><img src="cpucooler.jpg" alt="Cpu Kühler" /> Lüfter</a>
          <a href="/products/cases">Gehäuse</a>
          <a href="/products/cpucoolers">Cpu Kühler</a>
          <a href="/products/cpus">Cpu's</a>
          <a href="/products/extdrives">External Drives</a>
          <a href="/products/intdrives">Internal Drives</a>
          <a href="/products/memory">Arbeitsspeicher</a>
          <a href="/products/motherboards">Motherboards</a>
          <a href="/products/os">Betriebssystem</a>
          <a href="/products/powersupplys">Netzteile</a>
          <a href="/products/videocards">Grafikkarten</a>
          <a href="/products/wirednetworkcards">Wired Networkcards</a>
          <a href="/products/wirelessnetworkcards">Wireless Networkcards</a>
        </div>
      </div>

      {/* Der Hauptinhalt wird verschoben, wenn das Grid sichtbar ist */}
      <div className={`${styles.mainContent} ${isProductsOpen ? styles.shifted : ''}`}>
        {/* Dein Hauptinhalt */}
      </div>
    </>
  );
}
