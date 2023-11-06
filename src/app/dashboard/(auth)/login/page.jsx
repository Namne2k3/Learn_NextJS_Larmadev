'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Button from '@/components/button/Button'
const handleSubmit = async (e) => {
  e.preventDefault();
  const email = e.target[0].value ;
  const password = e.target[1].value;
  signIn("credentials", { email , password })
};
const Login = () => {

  const session = useSession();
  const router = useRouter();

  if ( session.status === 'loading' ) {
    return <p>Loading...</p>
  }

  if ( session.status === 'authenticated' ) {
    router?.push("/dashboard")
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")} className={styles.button}>Login with Google</button>
      <Button url="/dashboard/register" text="Register" />
    </div>
  )
}

export default Login