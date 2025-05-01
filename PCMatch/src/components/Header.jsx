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
          <div className={styles.navDiv}>
            <Link to="/builder/" className={styles.homeButton}>Builder</Link>
            <Link to="/completedbuilds/" className={styles.homeButton}>Builds</Link>
            </div>
        
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
          <a href="/products/os"><img src={os} />OS</a>
          <a href="/products/casefans"><img src={casefan} /> Fans</a>
          <a href="/products/cases"><img src={shell} />Cases</a>
          <a href="/products/cpucoolers"><img src={cpucooler} />CPU Cooler</a>
          <a href="/products/cpus"><img src={cpu} />CPU's</a>
          <a href="/products/extdrives"><img src={extdrives} />External Drives</a>
          <a href="/products/intdrives"><img src={intdrives} />Internal Drives</a>
          <a href="/products/memory"><img src={memory} />Memory</a>
          <a href="/products/motherboards"><img src={motherboard} />Motherboards</a>
          <a href="/products/powersupplies"><img src={powersupply} />Powersupplies</a>
          <a href="/products/videocards"><img src={videocard} />GPU's</a>
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
