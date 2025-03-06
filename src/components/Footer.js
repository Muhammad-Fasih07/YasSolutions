import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Top Section: Logo + Navigation */}
                <div className={styles.topSection}>
                    {/* Logo Section */}
                    <div className={styles.logoContainer}>
                        <Image src="/Yas.svg" alt="YAS Solutions Logo" width={60} height={60} className={styles.logoImage} />
                        <span className={styles.solutionText}>SOLUTIONS</span>
                    </div>

                    {/* Navigation */}
                    <nav className={styles.nav}>
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Careers</a>
                        <a href="#">About us</a>
                    </nav>
                </div>

                {/* Horizontal Line Divider */}
                <div className={styles.divider}></div>

                {/* Bottom Section: Contact & Social Links */}
                <div className={styles.bottomSection}>
                    {/* Contact Info */}
                    <div className={styles.contact}>
                        <div className={styles.contactItem}>
                            <FaEnvelope className={styles.icon} />
                            <span>development@Yassolution.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaPhone className={styles.icon} />
                            <span>051-9977428</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className={styles.social}>
                        <FaInstagram className={styles.socialIcon} />
                        <FaFacebookF className={styles.socialIcon} />
                        <FaXTwitter className={styles.socialIcon} />
                        <FaLinkedinIn className={styles.socialIcon} />
                        <FaWhatsapp className={styles.socialIcon} />
                    </div>
                </div>

                {/* Copyright */}
                <p className={styles.copyright}>
                    © 2025 Copyright By YAS-Solutions
                </p>
            </div>
        </footer>
    );
}
