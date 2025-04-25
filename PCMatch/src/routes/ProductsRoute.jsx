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
import OsCard from "../components/OsCard";
import ExtDriveCard from "../components/ExtDriveCard";
import MemoryCard from "../components/MemoryCard";
import MotherboardCard from "../components/MotherboardCard";
import PowerSupplyCard from "../components/PowerSupplyCard";
import WiredNtkCard from "../components/WiredCard";
import WirelessNtkCard from "../components/WirelessCard";


export default function ProductsRoute(){
    const [filter, setFilter] = useState('ALL')


    const [searchQuery, setSearchQuery] = useState('');
    


    return (
        <div>
            <div className={styles.grid}>

          <a href="#os"><img src={os} />OS</a>
          <a href="#fans"><img src={casefan} /> Fans</a>
          <a href="#cases"><img src={shell} />Cases</a>
          <a href="#cpucoolers"><img src={cpucooler} />CPU Cooler</a>
          <a href="#cpu's"><img src={cpu} />CPU's</a>
          <a href="#extdrives"><img src={extdrives} />External Drives</a>
          <a href="#intdrives"><img src={intdrives} />Internal Drives</a>
          <a href="#memory"><img src={memory} />Memory</a>
          <a href="#motherboards"><img src={motherboard} />Motherboards</a>
          <a href="#powersupplies"><img src={powersupply} />Powersupply</a>
          <a href="#gpu's"><img src={videocard} />GPU's</a>
          <a href="#wirednetworkcards"><img src={wiredcard} />Wired Networkcards</a>
          <a href="#wirelessnetworkcards"><img src={wirelesscard} />Wireless Networkcards</a>


            </div>
            <OsCard/>
            <CasefanCard/>
            <CaseCard/>
            <CpuCoolerCard/>
            <CpuCard/>
            <GpuCard/>
            <ExtDriveCard/>
            <IntHardCard/>
            <MemoryCard/>
            <MotherboardCard/>
            <PowerSupplyCard/>
            <WiredNtkCard/>
            <WirelessNtkCard/>
            
        </div>
    )
    

}