import React from "react";
import styles from "./ConfirmModal.css";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={styles.modal-overlay}>
      <div className={styles.modal-box}>
        <p>{message}</p>
        <div className={styles.modal-buttons}>
          <button className={styles.cancel-button} onClick={onCancel}>Abbrechen</button>
          <button className={styles.confirm-button} onClick={onConfirm}>Löschen</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
