import { useState } from "react";
import GpuCard from "../components/VideoCardCard";
import CpuCard from "../components/CpuCard";
import CaseCard from "../components/CaseCard";
import Button from "../components/Button";
import styles from './ProductsRoute.module.css'
import CasefanCard from "../components/CasefanCard";
import CpuCoolerCard from "../components/CpuCoolerCard";
import IntHardCard from "../components/IntDriveCard";



export default function ProductsRoute(){
    const [filter, setFilter] = useState('ALL')


    const [searchQuery, setSearchQuery] = useState('');
    


    return (
        <div>
      <h2>Produkte</h2>
      <input
                type="text"
                placeholder="Produkte suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput} />
      
      <div style={{ marginBottom: '1rem' }}>
      <button
                    className={`${styles.filterBtn} ${filter === 'ALL' ? styles.filterBtn : ''}`}
                    onClick={() => setFilter('ALL')}
                >
                    Reset
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'GPU' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('GPU')}
                >
                    GPU's
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'CPU' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('CPU')}
                >
                    CPU's
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'Case' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('Case')}
                >
                    Cases
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'CaseFan' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('CaseFan')}
                >
                    Lüfter
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'CpuCooler' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('CpuCooler')}
                >
                    CPU Kühler
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'Drives' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('Drives')}
                >
                    Speicher
                </button>
            </div>
            

            


        {filter === 'ALL' && (
        <>
          <GpuCard searchQuery={searchQuery}/>
          <CpuCard searchQuery={searchQuery}/>
          <CaseCard searchQuery={searchQuery}/>
          <CasefanCard searchQuery={searchQuery}/>
          <CpuCoolerCard searchQuery={searchQuery}/>
          <IntHardCard searchQuery={searchQuery}/>
        </>
      )}

      {filter === 'GPU' && <GpuCard searchQuery={searchQuery}/>}
      {filter === 'CPU' && <CpuCard searchQuery={searchQuery}/>}
      {filter === 'Case' && <CaseCard searchQuery={searchQuery}/>}
      {filter === 'CaseFan' && <CasefanCard searchQuery={searchQuery}/>}
      {filter === 'CpuCooler' && <CpuCoolerCard searchQuery={searchQuery}/>}
      {filter === 'Drives' && <IntHardCard searchQuery={searchQuery}/>}
        </div>
    )
    

}