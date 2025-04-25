import React, { useState } from "react";
//Data imports
import gpuData from "../data/video-card.json";
import cpuData from "../data/cpu.json";
import Cases from '../data/case.json';
import CaseFans from '../data/case-fan.json';
import Cooler from '../data/cpu-cooler.json';
import ExtDrives from '../data/external-hard-drive.json';
import IntDrives from '../data/internal-hard-drive.json';
import Memory from '../data/memory.json';
import Motherboards from '../data/motherboard.json';
import Os from '../data/os.json';
import Powersupplies from '../data/power-supply.json';
import WiredCard from '../data/wired-network-card.json';
import WirelessCard from '../data/wired-network-card.json';

// Import your Card components
import GpuCard from './VideoCardCard';
import CpuCard from './CpuCard';
import CaseCard from './CaseCard';
import CasefanCard from './CasefanCard';
import CpuCoolerCard from './CpuCoolerCard';
import ExtDriveCard from './ExtDriveCard';
import IntDriveCard from './IntDriveCard';
import MemoryCard from './MemoryCard';
import MotherboardCard from './MotherboardCard';
import OsCard from './OsCard';
import PowerSupplyCard from './PowerSupplyCard';
import WiredCardComponent from './WiredCard';
import WirelessCardComponent from './WirelessCard';

//styling imports
import styles from '../components/Buildsummary.module.css';
const BuildForm = () => {
    // Add artificial IDs to each dataset
    const addArtificialIds = (data) => {
        return data.map((card, index) => ({
             ...card, id: index + 1 }));

    };

    const handleNext = (selectedValue) => {
        // Speichere nur den Namen des ausgewählten Objekts in formData
        setFormData({ ...formData, [steps[currentStep].id]: selectedValue.name }); // Änderung hier
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(steps.length); // Move to summary step
        }
    };
    const steps = [
        { id: "gpu", label: "Select a GPU", data: addArtificialIds(gpuData), component: <GpuCard handleNext={handleNext}/>, },
        { id: "cpu", label: "Select a CPU", data: addArtificialIds(cpuData), component: <CpuCard handleNext={handleNext}/> },
        { id: "case", label: "Select a Case", data: addArtificialIds(Cases), component: <CaseCard handleNext={handleNext}/>},
        { id: "caseFan", label: "Select Case Fans", data: addArtificialIds(CaseFans), component: <CasefanCard handleNext={handleNext}/>},
        { id: "cooler", label: "Select a CPU Cooler", data: addArtificialIds(Cooler), component: <CpuCoolerCard handleNext={handleNext}/>},
        { id: "extDrives", label: "Select External Drives", data: addArtificialIds(ExtDrives), component: <ExtDriveCard handleNext={handleNext}/>},
        { id: "intDrives", label: "Select Internal Drives", data: addArtificialIds(IntDrives), component: <IntDriveCard handleNext={handleNext}/>},
        { id: "memory", label: "Select Memory", data: addArtificialIds(Memory), component: <MemoryCard handleNext={handleNext}/>},
        { id: "motherboard", label: "Select a Motherboard", data: addArtificialIds(Motherboards), component: <MotherboardCard handleNext={handleNext}/>},
        { id: "os", label: "Select an Operating System", data: addArtificialIds(Os), component: <OsCard handleNext={handleNext}/>},
        { id: "powerSupply", label: "Select a Power Supply", data: addArtificialIds(Powersupplies), component: <PowerSupplyCard handleNext={handleNext}/>},
        { id: "wiredCard", label: "Select a Wired Network Card", data: addArtificialIds(WiredCard), component: <WiredCardComponent handleNext={handleNext}/>},
        { id: "wirelessCard", label: "Select a Wireless Network Card", data: addArtificialIds(WirelessCard), component: <WirelessCardComponent handleNext={handleNext}/>},
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    const handleSkip = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(steps.length); // Move to summary step
        }
    };

    const handleEdit = (stepIndex) => {
        setCurrentStep(stepIndex);
    };

    const handleSubmit = () => {
        console.log("Final Form Data:", formData);
        alert("Form submitted! Check the console for details.");
    };

    if (currentStep === steps.length) {
        // Summary step
        return (
            <div>
              <h2 style={{ padding: "1rem" }}>Summary</h2>
              
              <div className={styles.Card} style={{ maxWidth: "800px", margin: "0 auto" }}>
                {steps && steps.map((step, index) => (
                  <div key={step.id} style={{ marginBottom: "1rem" }}>
                    <strong>{step.label}:</strong> {formData[step.id] || <em>Skipped</em>}
                    <div>
                      <button onClick={() => handleEdit(index)} className={styles.showMoreBtn} style={{ marginTop: "0.5rem" }}>
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
                
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <button onClick={handleSubmit} className={styles.showMoreBtn}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          );
    }

    const currentStepData = steps[currentStep];
    const CurrentCardComponent = currentStepData.component;

    return (
        <div>
            <h2>{currentStepData.label}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {CurrentCardComponent}
            </div>
            <button onClick={handleSkip} style={{ marginTop: "20px" }} className={styles.loadMoreBtn}>Skip</button>
        </div>
    );
};

export default BuildForm;