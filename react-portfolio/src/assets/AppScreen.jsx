import React, { useState, useEffect } from 'react';
import styles from './AppScreen.module.css';

function AppScreen() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = `${now.toLocaleString('en-US', { weekday: 'long' })} ${now.getDate()} ${now.toLocaleString('en-US', { month: 'long' })}`;
      setCurrentDate(formattedDate);

      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;

      setCurrentTime(`${hours}:${minutes}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (    
    <div className={styles.appContainer}>
      <div className={styles.iphoneFrame}>
        <div className={styles.iphoneScreen}>
          <div className={styles.statusBar}>
            <img src="https://img.icons8.com/?size=100&id=86349&format=png&color=000000" alt="Mobile Service" className={styles.statusIcon} />
            <img src="https://img.icons8.com/ios-filled/50/000000/wifi.png" alt="Wi-Fi" className={styles.statusIcon} />
            <img src="https://img.icons8.com/?size=100&id=zddfYtvTqQmM&format=png&color=000000" alt="Battery" className={styles.statusIcon} />
          </div>
            
          </div>
        </div>
      </div>
  );
}

export default AppScreen;
