import React, { useEffect, useState } from "react";
import styles from "./Card.module.css"; // Optional: Styling für die Karten
import completebuild from '../assets/completebuild.png';
import style from './CreatedCards.module.css';
import ConfirmModal from "./ConfirmModal";

const CreatedCards = () => {
    const [savedBuilds, setSavedBuilds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [deleteAll, setDeleteAll] = useState(false);

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

    const handleDelete = (index) => {
        const updatedBuilds = savedBuilds.filter((_, i) => i !== index);
        setSavedBuilds(updatedBuilds);
        localStorage.setItem("pcBuildData", JSON.stringify(updatedBuilds));
    };
    
    const handleClearAll = () => {
        localStorage.removeItem("pcBuildData");
        setSavedBuilds([]);
    };
    return (
        <div>
            <h2>Your Saved PC Builds</h2>
              {/* Button zum Leeren des localStorage */}
              <button
  className={style.deletebutton}
  onClick={() => {
    setDeleteAll(true);
    setShowModal(true);
  }}
>
  Clear Saved Builds
</button>
            <div className={styles.Grid}>
                {savedBuilds.map((build, index) => (
                    <div key={index} className={styles.Card}>
                        <img src={completebuild} />
                        {Object.entries(build).map(([key, value]) => (
                            <p key={key}>
                                <strong>{key}:</strong> {value || "Skipped"}
                            </p>
                        ))}
                        <button
  onClick={() => {
    setDeleteIndex(index);
    setShowModal(true);
  }}
  className={style.deletebutton}
>
  Delete
</button>
                    </div>
                ))}
            </div>
            {showModal && (
  <ConfirmModal
    message={
      deleteAll
        ? "Are you sure you want to delete all saved builds?"
        : "Are you sure you want to delete this build?"
    }
    onConfirm={() => {
      if (deleteAll) {
        handleClearAll();
      } else {
        handleDelete(deleteIndex);
      }
      setShowModal(false);
      setDeleteAll(false);
      setDeleteIndex(null);
    }}
    onCancel={() => {
      setShowModal(false);
      setDeleteAll(false);
      setDeleteIndex(null);
    }}
  />
)}
        </div>
    );
};

export default CreatedCards;