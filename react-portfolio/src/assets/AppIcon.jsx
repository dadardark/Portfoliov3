import React from 'react';
import styles from './AppIcon.module.css';

function AppIcon({ name, iconSrc, bgColor = '#ffffff', onClick }) { 
  return (
    <div className={styles.appIcon} onClick={onClick}> 
      <div className={styles.iconContainer} style={{ backgroundColor: bgColor }}>
        <img src={iconSrc} alt={name} className={styles.iconImage} />
      </div>
      <p className={styles.appName}>{name}</p>
    </div>
  );
}

export default AppIcon;
