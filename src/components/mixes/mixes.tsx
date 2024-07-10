"use client"
import { mixQuery } from "@/queries/get-mixes";
import { useSuspenseQuery } from "@apollo/client";
import styles from './mixes.module.css'
import Link from "next/link";


export const Mixes = () => {
  const { data } = useSuspenseQuery<any>(mixQuery);
  return (
    <div className={styles.container}>
      {data.mixes.map((m: any, i: number) => (
        <Link href={`mixes/${m.slug}`} className={styles.mix} key={i}>
          <div className={styles.imageContainer}>
            <img src={m.image.url} className={styles.image}/>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              {m.title}
            </div>
            <div dangerouslySetInnerHTML={{ __html: m.embed }} /> 
          </div>
        </Link>
      ))}
    </div>
  )
}