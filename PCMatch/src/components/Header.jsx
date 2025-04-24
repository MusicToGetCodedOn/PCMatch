import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
       <Link to="/" className={styles.headerTitle}>PCMatch</Link>

      <br />
      <nav className={styles.nav}>
      <Link to="/builder/" className={styles.homeButton}>Builder</Link>
      <Link to="/completedbuilds/" className={styles.homeButton}>Completed Builds</Link>
      <Link to="/products/" className={styles.homeButton}>Products</Link>
      
    
      </nav>
    </header>
  );
}
