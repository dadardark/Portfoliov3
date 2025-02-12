import React from 'react';
import styles from './HomeScreen.module.css';
import AppIcon from './AppIcon.jsx';
import logo from './logo.png'; 
import ss24 from './ss24.png';
import mkx from './mkx.jpeg';
import HC from './healthy-connections-edit.png';


function HomeScreen({ lock }) {
  return (
    <div className={styles.appContainer}>
      <div className={styles.iphoneFrame}>
        <div className={styles.iphoneScreen}>
          <div className={styles.statusBar}>
            <img src="https://img.icons8.com/?size=100&id=86349&format=png&color=000000" alt="Mobile Service" className={styles.statusIcon} />
            <img src="https://img.icons8.com/ios-filled/50/000000/wifi.png" alt="Wi-Fi" className={styles.statusIcon} />
            <img src="https://img.icons8.com/?size=100&id=zddfYtvTqQmM&format=png&color=000000" alt="Battery" className={styles.statusIcon} />
          </div>

          <div className={styles.homeScreen}>
            <div className={styles.appGrid}>
              <AppIcon name="Tic-Tac-Toe" iconSrc="https://img.icons8.com/?size=100&id=fS8E5bcWpMqK&format=png&color=000000" />
              <AppIcon name="DietRiot" iconSrc={logo} bgColor='#0c7d77'/>
              <AppIcon name="CSC 24" iconSrc={ss24} />
              <AppIcon name="MKX Lobby" iconSrc={mkx} />
              <AppIcon name="Bank WebApp" iconSrc="https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" bgColor='#b147d6 ' />
              <AppIcon name="HC" iconSrc={HC} bgColor='#ccc695' />
            </div>

            <div className={styles.statusTray}>
              <AppIcon name="Linkedin" iconSrc="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" bgColor="#0072b1"/>
              <AppIcon name="GitHub" iconSrc="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" />
              <AppIcon name="Resume" iconSrc="https://img.icons8.com/?size=100&id=ya4CrqO7PgnY&format=png&color=000000" />
              <AppIcon name="Contact me" iconSrc="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
