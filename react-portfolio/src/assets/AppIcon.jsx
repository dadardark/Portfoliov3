import React from 'react';
import styles from './AppIcon.module.css';

function AppIcon({ name, iconSrc, bgColor = '#ffffff' }) { 
  return (
    <div className={styles.appIcon}>
      <div className={styles.iconContainer} style={{ backgroundColor: bgColor }}>
        <img src={iconSrc} alt={name} className={styles.iconImage} />
      </div>
      <p className={styles.appName}>{name}</p>
    </div>
  );
}

export default AppIcon;
