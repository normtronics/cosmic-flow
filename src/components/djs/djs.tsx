"use client"

import { djQuery } from "@/queries/get-djs";
import { useSuspenseQuery } from "@apollo/client";
import styles from './djs.module.css'

export const DJS = () => {
  const { data } = useSuspenseQuery<any>(djQuery);
  return (
    <div className={styles.container}>
      {data.djs.map((d: any, i: number) => (
        <div className={styles.card} key={i}>
          <div className={styles.imageContainer}>
             <img src={d.image.url} className={styles.image}/>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{d.name}</div>
          </div>
          
        </div>
      ))}
    </div>
  )
}