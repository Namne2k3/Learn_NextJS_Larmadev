'use client'
import React, { useRef, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
import emailjs from '@emailjs/browser'

export const metadata = {
  title: "Namne Dev Contact",
  description: "This is Contact Page"
}

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  var templateParams = {
    name: name,
    email: email,
    message: message
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_seylfxs', 'template_91s3f5s', templateParams, '3wmfQv_HlL-lVqKay')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  };

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

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input value={name} onChange={(e) => setName(e.target.value)} name='user_name' type="text" placeholder='Name' className={styles.input} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} name='user_email' type="text" placeholder='Email' className={styles.input} />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} name='message' className={styles.textarea} cols="30" rows="10"></textarea>
          <Button text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact