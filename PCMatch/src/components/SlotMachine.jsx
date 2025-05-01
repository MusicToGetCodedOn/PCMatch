"use client"

import { useState } from "react"
import styles from "./SlotMachine.module.css"

// Import images
import cpucooler from "../assets/cpucooler.png"
import shell from "../assets/case.png"
import casefan from "../assets/case_fan.png"
import cpu from "../assets/cpu.png"
import intdrives from "../assets/storage.png"
import memory from "../assets/memory.png"
import motherboard from "../assets/motherboard.png"
import powersupply from "../assets/powersupply.png"
import videocard from "../assets/videocard.png"
import extdrives from "../assets/ext_hard_drive.png"

const images = [cpucooler, shell, casefan, cpu, intdrives, memory, motherboard, powersupply, videocard, extdrives]

function getRandomSlot() {
  return images[Math.floor(Math.random() * images.length)]
}

// Define paylines - arrays of [row, col] positions
const PAYLINES = {
  // Horizontal lines (all positions in each row)
  horizontalLine1: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  horizontalLine2: [
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ],
  horizontalLine3: [
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ],
  horizontalLine4: [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
  ],
  // Diagonal lines
  diagonalLine1: [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [3, 4],
  ],
  diagonalLine2: [
    [3, 0],
    [2, 1],
    [1, 2],
    [0, 3],
    [0, 4],
  ],
}

// Default exported component as a default function
export default function SlotMachine() {
  // Initialize a 5x4 grid (5 columns, 4 rows)
  const initialGrid = Array(4)
    .fill()
    .map(() =>
      Array(5)
        .fill()
        .map(() => getRandomSlot()),
    )

  const [grid, setGrid] = useState(initialGrid)
  const [message, setMessage] = useState("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [winType, setWinType] = useState("")
  const [winningCells, setWinningCells] = useState([])
  const [activePaylines, setActivePaylines] = useState([])

  // Check for winning combinations
  const checkWins = (grid) => {
    let totalMatches = 0
    let winningPositions = []
    const winningPaylines = []

    // Check each payline
    Object.entries(PAYLINES).forEach(([paylineName, positions]) => {
      const firstSymbol = grid[positions[0][0]][positions[0][1]]
      let matches = 1
      const paylineMatches = [positions[0]]

      // Check consecutive matches in this payline
      for (let i = 1; i < positions.length; i++) {
        const [row, col] = positions[i]
        if (grid[row][col] === firstSymbol) {
          matches++
          paylineMatches.push([row, col])
        } else {
          break
        }
      }

      // If we have 3 or more matches, it's a win
      if (matches >= 3) {
        totalMatches += matches
        winningPositions = [...winningPositions, ...paylineMatches]
        winningPaylines.push(paylineName)
      }
    })

    // Remove duplicate positions
    winningPositions = winningPositions.filter(
      (pos, index, self) => index === self.findIndex((p) => p[0] === pos[0] && p[1] === pos[1]),
    )

    return { totalMatches, winningPositions, winningPaylines }
  }

  // Determine win message based on total matches
  const getWinMessage = (totalMatches) => {
    if (totalMatches >= 15) {
      return { message: "🎰 JACKPOT! Incredible win!", type: "jackpot" }
    } else if (totalMatches >= 12) {
      return { message: "🔥 MEGA WIN! Amazing combination!", type: "bigWin" }
    } else if (totalMatches >= 9) {
      return { message: "💰 BIG WIN! Great combination!", type: "mediumWin" }
    } else if (totalMatches >= 6) {
      return { message: "✨ Medium Win! Nice combination!", type: "smallWin" }
    } else if (totalMatches >= 3) {
      return { message: "🎊 Small Win! Good job!", type: "smallWin" }
    } else {
      return { message: "No win, try again!", type: "" }
    }
  }

  const spin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setMessage("")
    setWinType("")
    setWinningCells([])
    setActivePaylines([])

    // Play spinning animation for a short time
    setTimeout(() => {
      const newGrid = Array(4)
        .fill()
        .map(() =>
          Array(5)
            .fill()
            .map(() => getRandomSlot()),
        )
      setGrid(newGrid)

      // Check for wins
      const { totalMatches, winningPositions, winningPaylines } = checkWins(newGrid)
      const { message, type } = getWinMessage(totalMatches)

      setMessage(message)
      setWinType(type)
      setWinningCells(winningPositions)
      setActivePaylines(winningPaylines)
      setIsSpinning(false)
    }, 2000)
  }

  // Function to determine light colors
  const getLightColor = (index) => {
    if (!winType) return "rgba(255, 255, 255, 0.3)"

    const colors = [
      "var(--color-accent-main)",
      "var(--color-accent-secondary)",
      "var(--color-accent-soft)",
      "var(--color-accent-alt)",
      "var(--color-highlight)",
    ]

    return colors[index % colors.length]
  }

  // Check if a cell is part of a winning combination
  const isWinningCell = (row, col) => {
    return winningCells.some((cell) => cell[0] === row && cell[1] === col)
  }

  return (
    <div className={styles.background}>
      <div className={styles.slotMachine}>
        {/* Machine header */}
        <div className={styles.machineHeader}>
          <h1 className={styles.machineName}>PC PARTS JACKPOT</h1>
        </div>

        {/* Decorative lights */}
        <div className={styles.lightsContainer}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`${styles.light} ${winType ? styles.lightOn : ""}`}
              style={{ color: getLightColor(i) }}
            />
          ))}
        </div>

        {/* Slot display */}
        <div className={styles.slotWindow}>
          <div className={styles.gridContainer}>
            {/* Pay lines */}
            {activePaylines.includes("horizontalLine1") && (
              <div
                className={`${styles.payLine} ${styles.horizontalLine} ${styles.horizontalLine1} ${styles.payLineWin}`}
              ></div>
            )}
            {activePaylines.includes("horizontalLine2") && (
              <div
                className={`${styles.payLine} ${styles.horizontalLine} ${styles.horizontalLine2} ${styles.payLineWin}`}
              ></div>
            )}
            {activePaylines.includes("horizontalLine3") && (
              <div
                className={`${styles.payLine} ${styles.horizontalLine} ${styles.horizontalLine3} ${styles.payLineWin}`}
              ></div>
            )}
            {activePaylines.includes("horizontalLine4") && (
              <div
                className={`${styles.payLine} ${styles.horizontalLine} ${styles.horizontalLine4} ${styles.payLineWin}`}
              ></div>
            )}
            {activePaylines.includes("diagonalLine1") && (
              <div className={`${styles.payLine} ${styles.diagonalLine1} ${styles.payLineWin}`}></div>
            )}
            {activePaylines.includes("diagonalLine2") && (
              <div className={`${styles.payLine} ${styles.diagonalLine2} ${styles.payLineWin}`}></div>
            )}

            {/* Grid cells */}
            {grid.map((row, rowIndex) =>
              row.map((img, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`${styles.reelCell} ${isSpinning ? styles.spinning : ""} ${
                    isWinningCell(rowIndex, colIndex) ? styles.reelWin : ""
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`slot-${rowIndex}-${colIndex}`}
                    className={styles.reelImage}
                  />
                </div>
              )),
            )}
          </div>
        </div>

        {/* Controls section */}
        <div className={styles.controlPanel}>
          <button onClick={spin} disabled={isSpinning} className={styles.spinButton}>
            {isSpinning ? "SPINNING" : "SPIN"}
          </button>

          {/* Message display */}
          <div className={styles.messageContainer}>
            {message && (
              <div
                className={`${styles.message} ${
                  winType === "jackpot"
                    ? styles.jackpotWin
                    : winType === "bigWin"
                      ? styles.bigWin
                      : winType === "mediumWin"
                        ? styles.mediumWin
                        : winType === "smallWin"
                          ? styles.smallWin
                          : styles.noWin
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Optional lever */}
        <div className={styles.lever} onClick={!isSpinning ? spin : undefined}></div>

        {/* Machine footer */}
        <div className={styles.machineFooter}></div>
      </div>

      {/* Pay table */}
      <div className={styles.payTable}>
        <div className={styles.payTableTitle}>WINNING COMBINATIONS</div>
        <div className={styles.payTableRow}>
          <span>3+ matching symbols in a line</span>
          <span>Small Win</span>
        </div>
        <div className={styles.payTableRow}>
          <span>6+ matching symbols</span>
          <span>Medium Win</span>
        </div>
        <div className={styles.payTableRow}>
          <span>9+ matching symbols</span>
          <span>Big Win</span>
        </div>
        <div className={styles.payTableRow}>
          <span>12+ matching symbols</span>
          <span>Mega Win</span>
        </div>
        <div className={styles.payTableRow}>
          <span>15+ matching symbols</span>
          <span>JACKPOT!</span>
        </div>
      </div>

      {/* Instructions */}
      <div className={styles.instructions}>
        <p>Match 3 or more PC components in horizontal or diagonal lines to win!</p>
        <p>The more matching symbols you get, the bigger your win!</p>
      </div>
    </div>
  )
}
