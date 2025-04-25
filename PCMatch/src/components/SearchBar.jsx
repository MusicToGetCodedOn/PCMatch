import React from 'react';
import styles from '../components/SearchBar.module.css'


export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className={styles.SearchBar}
    />
  );
}