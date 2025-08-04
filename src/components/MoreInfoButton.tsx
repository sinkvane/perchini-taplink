import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MoreInfoButton.module.css';

const MoreInfoButton = ({ id }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.moreInfoButton} onClick={() => navigate(`/restaurant/${id}`)}>
      Подробнее
    </button>
  );
};

export default MoreInfoButton;