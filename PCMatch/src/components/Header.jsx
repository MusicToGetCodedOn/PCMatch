import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import cpucooler from '../assets/cpucooler.png';
import shell from '../assets/case.png';
import casefan from '../assets/case_fan.png';
import cpu from '../assets/cpu.png';
import intdrives from '../assets/storage.png'
import memory from '../assets/memory.png';
import motherboard from '../assets/motherboard.png';
import powersupply from '../assets/powersupply.png';
import videocard from '../assets/videocard.png';
import extdrives from '../assets/ext_hard_drive.png';
import os from '../assets/os.png';
import wiredcard from '../assets/wiredcard.png';
import wirelesscard from '../assets/wirelesscard.png';

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
          <a href="/products/os"><img src={os} />Betriebssystem</a>
          <a href="/products/casefans"><img src={casefan} /> Lüfter</a>
          <a href="/products/cases"><img src={shell} />Gehäuse</a>
          <a href="/products/cpucoolers"><img src={cpucooler} />Cpu Kühler</a>
          <a href="/products/cpus"><img src={cpu} />Cpu's</a>
          <a href="/products/extdrives"><img src={extdrives} />External Drives</a>
          <a href="/products/intdrives"><img src={intdrives} />Internal Drives</a>
          <a href="/products/memory"><img src={memory} />Arbeitsspeicher</a>
          <a href="/products/motherboards"><img src={motherboard} />Motherboards</a>
          <a href="/products/powersupplys"><img src={powersupply} />Netzteile</a>
          <a href="/products/videocards"><img src={videocard} />Grafikkarten</a>
          <a href="/products/wirednetworkcards"><img src={wiredcard} />Wired Networkcards</a>
          <a href="/products/wirelessnetworkcards"><img src={wirelesscard} />Wireless Networkcards</a>
        </div>
      </div>

      {/* Der Hauptinhalt wird verschoben, wenn das Grid sichtbar ist */}
      <div className={`${styles.mainContent} ${isProductsOpen ? styles.shifted : ''}`}>
        {/* Dein Hauptinhalt */}
      </div>
    </>
  );
}
