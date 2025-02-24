import React, { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import AppIcon from './AppIcon.jsx';
import logo from './logo.png'; 
import ss24 from './ss24.png';
import mkx from './mkx.jpeg';
import HC from './healthy-connections-edit.png';

function HomeScreen({ }) {
  const [currentTime, setCurrentTime] = useState('');
  const [showIframe, setShowIframe] = useState(false);
  const [showYoutubeIframe, setShowYoutubeIframe] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClickTicTacToe = () => {
    window.open('https://appetize.io/app/b_ifsgkk4xe6wb2ufgd2xt4nq244', '_blank');
  };

  const handleClickHC = () => {
    window.open('https://research.curtin.edu.au/research-areas/healthy-communities/healthy-connections/', '_blank');
  };

  const handleClickCSC = () => {
    window.open('https://www.curtin.edu.au/about/futures-platform/curtin-university-2024-sustainability-challenge/', '_blank');
  };

  const handleClickBWA = () => {
    window.open('https://bankdatawebapp20250224163503.azurewebsites.net/', '_blank');
  };
 
  const handleClickDiet = () => {
    setShowIframe(true);
  };

  const handleClickGit =() => {
    window.open('https://github.com/dadardark','_blank');
  }

  const handleClickLink =() => {
    window.open('  https://www.linkedin.com/in/jacob-arvino-99b102317/','_blank');
  }

  const handleClickResume =() => {
    window.open('https://drive.google.com/file/d/17VIJrYztN1c7tdagqPs8U5ZTrOqrVQiJ/view?usp=drive_link','_blank');
  }

  const handleClickMKX = () => {
    setShowYoutubeIframe(true); 
  };

  const handleCloseIframe = () => {
    setShowIframe(false);
    setShowYoutubeIframe(false);
  };

  const handleClickContact = () => {
    alert('Email: jacobarvino@gmail.com');  
  };
  
  return (
    <div className={styles.appContainer}>
      <div className={styles.iphoneFrame}>
        <div className={styles.iphoneScreen}>
          <div className={styles.statusBar}>
            <img src="https://img.icons8.com/?size=100&id=86349&format=png&color=000000" alt="Mobile Service" className={styles.statusIcon} />
            <img src="https://img.icons8.com/ios-filled/50/000000/wifi.png" alt="Wi-Fi" className={styles.statusIcon} />
            <img src="https://img.icons8.com/?size=100&id=zddfYtvTqQmM&format=png&color=000000" alt="Battery" className={styles.statusIcon} />
          </div>
          <p className={styles.timeBar}>{currentTime}</p>
          
          <div className={styles.homeScreen}>
            <div className={styles.appGrid}>            
              <AppIcon name="Tic-Tac-Toe" iconSrc="https://img.icons8.com/?size=100&id=fS8E5bcWpMqK&format=png&color=000000" onClick={handleClickTicTacToe} />
              <AppIcon name="DietRiot" iconSrc={logo} bgColor='#0c7d77' onClick={handleClickDiet}/>
              <AppIcon name="CSC 24" iconSrc={ss24} onClick={handleClickCSC}/>
              <AppIcon name="MKX Lobby" iconSrc={mkx} onClick={handleClickMKX}/>
              <AppIcon name="Bank WebApp" iconSrc="https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" bgColor='#b147d6 ' onClick={handleClickBWA}/>
              <AppIcon name="HC" iconSrc={HC} bgColor='#ccc695' onClick={handleClickHC}/>
            </div>

            <div className={styles.statusTray}>
              <AppIcon name="Linkedin" iconSrc="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" bgColor="#0072b1" onClick={handleClickLink}/>
              <AppIcon name="GitHub" iconSrc="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" onClick={handleClickGit}/>
              <AppIcon name="Resume" iconSrc="https://img.icons8.com/?size=100&id=ya4CrqO7PgnY&format=png&color=000000" onClick={handleClickResume}/>
              <AppIcon name="Contact me" iconSrc="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" onClick={handleClickContact}/>
            </div>
          </div>
        </div>
        {showIframe && (
          <div className={styles.iframeContainer}>
            <button className={styles.closeButton} onClick={handleCloseIframe}>X</button>
            <iframe
              className={styles.iframe}
              src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHl7DaRqC0bBaUzoPioHgRh%2FDiet-Riot-Application%3Fnode-id%3D1-2%26t%3DMF287i37E7GnWV1M-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
              allowFullScreen
            />
          </div>
        )}
         {showYoutubeIframe && (
          <div className={styles.iframeContainer}> 
            <button className={styles.closeButton} onClick={handleCloseIframe}>X</button>
            <iframe 
              className={styles.iframe} 
              src="https://www.youtube.com/embed/3K5o9HzKq20" 
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
