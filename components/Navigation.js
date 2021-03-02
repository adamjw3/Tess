import React from 'react'
import styles from '../styles/components/navbar.module.scss'

const Navigation = () => {
    return (<nav className={styles.navbar}>
        <div className="container">
            <div className="row">
                <div className={styles.navbar__wrapper}>
                    <a href="/" className={styles.navbar__brand}><img src="/logo2.svg" alt="" /></a>
                    <div className={styles.navbar__links} id="js-navbar-links">
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}><a href="template-about.html" className={styles.navbar__link} aria-current="page">Home</a></li>
                            <li className={styles.navbar__item}><a href="template-blog-article.html" className={styles.navbar__link}>Good Girl</a></li>
                            <li className={styles.navbar__item}><a href="template-event-index.html" className={styles.navbar__link}>Bad Girl</a></li>
                            <li className={styles.navbar__item}><a href="template-expert-index.html" className={styles.navbar__link}>Work for us</a></li>
                            <li className={styles.navbar__item}><a href="template-contact.html" className={styles.navbar__link}>Booking</a></li>
                        </ul>
                    </div>
                    <button className={styles.navbar__menu} id="js-navbar-menu-toggle" aria-controls="js-navbar-links" type="button"><i className="icomoon icon-burger" aria-hidden="true"></i><span className="u-visually-hide">Menu</span></button>
                </div>
            </div>
        </div>
    </nav>)
}

export default Navigation
