// src/SlotMachine.jsx
import React, { useState } from "react";

// import components
import Button from './Button';

// Import images
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

const images = [cpucooler ,shell, casefan, cpu, intdrives, memory, motherboard, powersupply, videocard, extdrives];

function getRandomSlot() {
  return images[Math.floor(Math.random() * images.length)];
}

// Default exported component as a default function
export default function SlotMachine() {
  const [slots, setSlots] = useState([cpucooler ,shell, casefan, cpu, intdrives, memory, motherboard, powersupply, videocard, extdrives]);

  const spin = () => {
    const newSlots = [getRandomSlot(), getRandomSlot(), getRandomSlot()];
    setSlots(newSlots);
  };

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4 mb-4">
        {slots.map((img, idx) => (
          <img key={idx} src={img} alt="slot" className="w-24 h-24" />
        ))}
      </div>
      <Button onClick={spin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Spin
      </Button>
    </div>
  );
}
