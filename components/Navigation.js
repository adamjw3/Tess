import React, { useState } from "react"
import Link from "next/link"
import styles from '../styles/components/navbar.module.scss'

const Navigation = () => {
  const [toggleNavigation, settoggleNavigation] = useState("")

  const burgerHandler = e => {
    e.preventDefault()
    settoggleNavigation(toggleNavigation === "" ? "isActive" : "")
  }
    return (<nav  className={toggleNavigation === "" ? styles.navbar : `${styles.navbar} ${styles.isActive}`}>
        <div className="container">
            <div className="row">
                <div className={styles.navbar__wrapper}>
                    <Link href="/" ><a className={styles.navbar__brand}><img src="/logo2.svg" alt="" /></a></Link>
                    <ul className={styles.navbar__numbers}>
                        <li className={styles.navbar__item}><a href="tel:123-456-7890" className={styles.navbar__linklarge}>07987654323</a></li>
                        <li className={styles.navbar__item}><a href="tel:123-456-7890" className={styles.navbar__linkImage}><img src="/whatsapp.png" alt="message us on whatsapp"></img></a></li>
                    </ul>
                    <div className={toggleNavigation === "" ? styles.navbar__links : `${styles.navbar__links} ${styles.isActive}`} id="js-navbar-links">
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}><Link href="/"><a className={styles.navbar__link}>Home</a></Link></li>
                            <li className={styles.navbar__item}><Link href="/good"><a className={styles.navbar__link}>Good Girl</a></Link></li>
                            <li className={styles.navbar__item}><Link href="/bad"><a className={styles.navbar__link}>Bad Girl</a></Link></li>
                            <li className={styles.navbar__item}><Link href="/"><a className={styles.navbar__link}>Work for us</a></Link></li>
                            <li className={styles.navbar__item}><Link href="/booking"><a className={styles.navbar__link}>Booking</a></Link></li>
                        </ul>
                    </div>
                    <button onClick={e => burgerHandler(e)} className={toggleNavigation === "" ? styles.navbar__menu : `${styles.navbar__menu} ${styles.isActive}`} id="js-navbar-menu-toggle" aria-controls="js-navbar-links" type="button"><i className="icomoon icon-burger" aria-hidden="true"></i><span className="u-visually-hide">Menu</span></button>
                </div>
            </div>
        </div>
    </nav>)
}

export default Navigation
