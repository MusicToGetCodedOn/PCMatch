// src/SlotMachine.jsx
import React, { useState } from "react";

// import components
import Button from './Button';

// Import images
import cpucooler from '../assets/cpucooler.png';
import shell from '../assets/case.png';
import casefan from '../assets/case_fan.png';
import cpu from '../assets/cpu.png';
import intdrives from '../assets/storage.png';
import memory from '../assets/memory.png';
import motherboard from '../assets/motherboard.png';
import powersupply from '../assets/powersupply.png';
import videocard from '../assets/videocard.png';
import extdrives from '../assets/ext_hard_drive.png';

const images = [cpucooler, shell, casefan, cpu, intdrives, memory, motherboard, powersupply, videocard, extdrives];

function getRandomSlot() {
  return images[Math.floor(Math.random() * images.length)];
}

function checkReward(slots) {
    let first = slots[0];
    let streak = 1;
  
    for (let i = 1; i < slots.length; i++) {
      if (slots[i] === first) {
        streak++;
      } else {
        break;
      }
    }
  
    switch (streak) {
      case 5:
        return "🎉 GRAND WIN! All 5 matched from the start!";
      case 4:
        return "🔥 Big Win! 4 matched from the start!";
      case 3:
        return "🎊 Small Win! 3 matched from the start!";
      default:
        return "No win, try again!";
    }
  }

// Default exported component as a default function
export default function SlotMachine() {
  const [slots, setSlots] = useState([
    cpucooler, shell, casefan, cpu, intdrives
  ]);
  const [message, setMessage] = useState("");

  const spin = () => {
    const newSlots = Array.from({ length: 5 }, () => getRandomSlot());
    setSlots(newSlots);
    setMessage(checkReward(newSlots));
  };

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4 mb-4">
        {slots.map((img, idx) => (
          <img key={idx} src={img} alt={`slot-${idx}`} className="w-24 h-24" />
        ))}
      </div>
      <Button onClick={spin} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
        Spin
      </Button>
      <div className="text-lg font-semibold">{message}</div>
    </div>
  );
}
