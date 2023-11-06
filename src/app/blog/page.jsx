import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Namne Dev Blog",
  description: "This is Blog Page"
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store"
  })
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {

  const data = await getData();
  console.log(data);

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => 
        <Link key={item.title} href={`/blog/${item._id}`} className={`${styles.container}`}>
          <div className={`${styles.imageContainer} flex-2`}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={`${styles.content} flex-1`}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Blog