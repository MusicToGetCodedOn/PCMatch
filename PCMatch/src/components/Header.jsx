import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
       <h1 className={styles.headerTitle}>PCMatch</h1>
      <nav>
      <Link to="/" className={styles.homeButton}>Home</Link>
    
      </nav>
    </header>
  );
}
