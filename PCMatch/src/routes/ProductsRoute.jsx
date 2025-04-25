import { useState } from "react";
import GpuCard from "../components/VideoCardCard";
import CpuCard from "../components/CpuCard";
import CaseCard from "../components/CaseCard";
import Button from "../components/Button";
import styles from './ProductsRoute.module.css'
import CasefanCard from "../components/CasefanCard";
import CpuCoolerCard from "../components/CpuCoolerCard";
import IntHardCard from "../components/IntDriveCard";
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


export default function ProductsRoute(){
    const [filter, setFilter] = useState('ALL')


    const [searchQuery, setSearchQuery] = useState('');
    


    return (
        <div>
            <div className={styles.grid}>
          <a href="/products/os"><img src={os} />OS</a>
          <a href="/products/casefans"><img src={casefan} /> Fans</a>
          <a href="/products/cases"><img src={shell} />Cases</a>
          <a href="/products/cpucoolers"><img src={cpucooler} />CPU Cooler</a>
          <a href="/products/cpus"><img src={cpu} />CPU's</a>
          <a href="/products/extdrives"><img src={extdrives} />External Drives</a>
          <a href="/products/intdrives"><img src={intdrives} />Internal Drives</a>
          <a href="/products/memory"><img src={memory} />Memory</a>
          <a href="/products/motherboards"><img src={motherboard} />Motherboards</a>
          <a href="/products/powersupplys"><img src={powersupply} />Powersupply</a>
          <a href="/products/videocards"><img src={videocard} />GPU's</a>
          <a href="/products/wirednetworkcards"><img src={wiredcard} />Wired Networkcards</a>
          <a href="/products/wirelessnetworkcards"><img src={wirelesscard} />Wireless Networkcards</a>
            </div>
      <h2>Products</h2>
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
                    Fans
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'CpuCooler' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('CpuCooler')}
                >
                    <img src={cpucooler} alt="cpu cooler"/><br />
                    CPU Cooler
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'Drives' ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilter('Drives')}
                >
                    Storage
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