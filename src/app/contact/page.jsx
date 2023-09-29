import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'


export const metadata = {
  title: "Namne Dev Contact",
  description: "This is Contact Page"
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={`${styles.content} lg:flex-row flex-col `}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=''
            fill
            className={styles.image}
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="text" placeholder='Email' className={styles.input}/>
          <textarea className={styles.textarea} cols="30" rows="10"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact