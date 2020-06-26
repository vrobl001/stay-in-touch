import React from 'react';
import styles from './Footer.module.css'

const Footer = props => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Stay In Touch {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer