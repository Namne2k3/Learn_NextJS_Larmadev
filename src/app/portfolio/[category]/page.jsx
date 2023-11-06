import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
import { items } from './data'


const getData = (cat) => {
  const data = items[cat];

  if ( data ) {
    return data ;
  }
  return notFound();
}


const Category = ({ params }) => {

  const data = getData(params.category); //illustrations

  return (
    <div className={styles.container}>
      
      <h1 className={`${styles.catTitle} text-[32px] font-bold text-[#7e89f9cc] capitalize`}>
        {params.category}
      </h1>

      {data.map((item) => 
        <div key={item.title} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill src={item.image} alt='' sizes={50} priority />
          </div>
        </div>
      )}

    </div>
  )
}

export default Category