import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: "Namne Dev Information",
    description: "This is Porfolio Page"
  }

const Portfolio = () => {
  return (
    <div className={styles.container}>
        <div className={styles.selectTitle}>Choose a gallery</div>
        <div className={styles.items}>
            <Link href="/portfolio/illustrations" className={styles.item}>
                <span className={styles.title}>Illustrations</span>
            </Link>
            <Link href="/portfolio/websites" className={styles.item}>
                <span className={styles.title}>Websites</span>
            </Link>
            <Link href="/portfolio/applications" className={styles.item}>
                <span className={styles.title}>Application</span>
            </Link>
        </div>
    </div>
  )
}

export default Portfolio