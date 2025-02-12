import Styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={Styles.footer}>
            <br />Site created 02/25<br />
            Last updated 02/25<br />
            <small className={Styles.dev}>
                Site by <a 
                    href="https://www.linkedin.com/in/jacob-arvino-99b102317/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="www.linkedin.com/in/jacob-arvino">
                    <u>Jacob Arvino</u>
                </a>
            </small>
        </footer>
    );
}

export default Footer;
