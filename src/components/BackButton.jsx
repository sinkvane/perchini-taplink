import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>Назад</button>
  );
};

export default BackButton;