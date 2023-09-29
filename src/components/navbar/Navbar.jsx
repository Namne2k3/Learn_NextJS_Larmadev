'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 4,
    title: "About",
    url: "/about"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
];

const Navbar = () => {

  const session = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} text-[20px]`}>Next Page</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(link => 
          <Link href={link.url} key={link.id} className={`${styles.link} hover:border-b-[1px] text-[20px]`}>
            {link.title}
          </Link>  
        )}

        {
          session.status === "authenticated" &&
            <button className={styles.logout} onClick={() => signOut()}>
              Logout
            </button>
        }
      </div>
    </div>
  )
}

export default Navbar