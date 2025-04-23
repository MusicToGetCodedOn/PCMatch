import { useState } from "react";
import GpuCard from "../components/VideoCardCard";
import CpuCard from "../components/CpuCard";
import CaseCard from "../components/CaseCard";
import Button from "../components/Button";
import styles from './ProductsRoute.module.css'
import CasefanCard from "../components/Casefan";



export default function ProductsRoute(){
    const [filter, setFilter] = useState('ALL')



    


    return (
        <div>
      <h2>Produkte</h2>
      
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
            </div>


        {filter === 'ALL' && (
        <>
          <GpuCard />
          <CpuCard />
          <CaseCard />
          <CasefanCard/>
        </>
      )}

      {filter === 'GPU' && <GpuCard />}
      {filter === 'CPU' && <CpuCard />}
      {filter === 'Case' && <CaseCard/>}
      {filter === 'CaseFan' && <CasefanCard/>}
        </div>
    )
    

}