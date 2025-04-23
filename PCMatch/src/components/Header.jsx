import { Link } from 'react-router-dom';
import './Header.module.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-title">Meine App</div>
      <nav>
        <Link to="/" className="home-button">Home</Link>    
      </nav>
    </header>
  );
}
