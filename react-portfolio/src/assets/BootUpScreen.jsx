import { useEffect, useState } from 'react';
import styles from './BootUpScreen.module.css';

function BootUpScreen({ onBootComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 2;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        onBootComplete();
                    }, 1000); 
                    return 100;
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onBootComplete]);

    return (
        <div className={styles.appContainer}>
            <div className={styles.iphoneFrame}>
                <div className={styles.iphoneScreen}>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                        alt="Apple Logo" 
                        className={styles.appleLogo} 
                    />
                    <div className={styles.progressBarContainer}>
                        <div 
                            className={styles.progressBar} 
                            style={{ width: `${progress}%` }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BootUpScreen;
