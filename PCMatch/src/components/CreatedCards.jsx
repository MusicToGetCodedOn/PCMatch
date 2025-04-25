import React, { useEffect, useState } from "react";
import styles from "./Card.module.css"; // Optional: Styling für die Karten
import buildName from './BuildForm.jsx'

const CreatedCards = () => {
    const [savedBuilds, setSavedBuilds] = useState([]);

    useEffect(() => {
        // Lade die Builds aus dem localStorage
        const data = localStorage.getItem("pcBuildData");
        try {
            const parsedData = JSON.parse(data);
            if (Array.isArray(parsedData)) {
                setSavedBuilds(parsedData); // Setze die Builds, wenn es ein Array ist
            } else {
                setSavedBuilds([]); // Fallback auf ein leeres Array
            }
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            setSavedBuilds([]); // Fallback auf ein leeres Array bei Fehler
        }
    }, []);

    if (savedBuilds.length === 0) {
        return <p>No saved builds found.</p>;
    }

    return (
        <div>
            <h2>Your Saved PC Builds</h2>
              {/* Button zum Leeren des localStorage */}
              <button
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete all saved builds?")) {
                        localStorage.removeItem("pcBuildData"); // Löscht nur die Builds
                        setSavedBuilds([]); // Aktualisiert den Zustand
                    }
                }}
                style={{
                    marginBottom: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ff4d4d",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Clear Saved Builds
            </button>
            <div className={styles.cardContainer}>
                {savedBuilds.map((build, index) => (
                    <div key={index} className={styles.card}>
                        {Object.entries(build).map(([key, value]) => (
                            <p key={key}>
                                <strong>{key}:</strong> {value || "Skipped"}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreatedCards;