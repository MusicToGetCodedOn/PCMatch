import { useState } from "react";
import GpuCard from "../components/VideoCardCard";
import gpus from "../data/video-card.json";
import CaseCard from "../components/CasesCard";


export default function ProductsRoute(){
    const [filter, setFilter] = useState("ALL")

    const filteredProducts = filter === 'ALL'
    return <main>
        <CaseCard />
    </main>
}