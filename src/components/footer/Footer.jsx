import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div  className={styles.container}>
      <div>@2023 Lamamia. All right reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" alt='Lama Dev' className={styles.icon} width={15} height={15} />
        <Image src="/2.png" alt='Lama Dev' className={styles.icon} width={15} height={15} />
        <Image src="/3.png" alt='Lama Dev' className={styles.icon} width={15} height={15} />
        <Image src="/4.png" alt='Lama Dev' className={styles.icon} width={15} height={15} />
      </div>
    </div>
  )
}

export default Footer