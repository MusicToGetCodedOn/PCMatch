import { useState } from "react";
import GpuCard from "../components/VideoCardCard";
import CpuCard from "../components/CpuCard";
import CaseCard from "../components/CaseCard";



export default function ProductsRoute(){
    const [filter, setFilter] = useState('ALL')



    


    return (
        <div>
      <h2>Produkte</h2>
      
        <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('GPU')}>Nur GPUs</button>
        <button onClick={() => setFilter('CPU')}>Nur CPUs</button>
        <button onClick={() => setFilter('Case')}>Cases</button>

        </div>

        {filter === 'ALL' && (
        <>
          <GpuCard />
          <CpuCard />
          <CaseCard />
        </>
      )}

      {filter === 'GPU' && <GpuCard />}
      {filter === 'CPU' && <CpuCard />}
      {filter === 'Case' && <CaseCard/>}
        </div>
    )
    

}