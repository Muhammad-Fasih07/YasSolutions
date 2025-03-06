import styles from '@/styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src="/yaslogo.svg" alt="YAS Solutions Logo" width="105" /> 
                <ul className={styles.navList}>
                    <li><a href="/" className={styles.navLink}>Home</a></li>
                    <li><a href="/services" className={styles.navLink}>Services</a></li>
                    <li><a href="/careers" className={styles.navLink}>Careers</a></li>
                    <li><a href="/about" className={styles.navLink}>About us</a></li>
                </ul>
                <a href="/contact" className={styles.navLinkb}>Contact Us</a>
            </nav>
        </header>
    );
}
