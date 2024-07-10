"use client";

import { eventQuery } from "@/queries/get-events";
import { useSuspenseQuery } from "@apollo/client";
import styles from './events.module.css'
import { useState } from "react";
import Link from "next/link";

export const Events = () => {
  const [activeTab, setActiveTab] = useState<string>('upcoming');
  const { data } = useSuspenseQuery<any>(eventQuery);

  const tabPressed = (tab: string) => {
    setActiveTab(tab)
  }

  const filterEvents = (tab: string) => {
    if(tab === 'upcoming') {
      //@ts-ignore
      return data.events.filter(event => new Date(event.time) - new Date > 0)
    }
    //@ts-ignore
    return data.events.filter(event => new Date(event.time) - new Date < 0)
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={`${styles.tab} ${ activeTab === 'upcoming' ? styles.active : ''}`} onClick={() => tabPressed('upcoming')}>
          Upcoming
        </button>
         <button className={`${styles.tab} ${ activeTab === 'past' ? styles.active : ''}`}  onClick={() => tabPressed('past')}>
          Past
        </button>
      </div>
      {filterEvents(activeTab).map((e: any, i: number) => (
        // <Link href={`events/${e.slug}`} className={styles.event} key={i}>
        <div className={styles.event} key={i}>
          <div className={styles.imageContainer}>
            <img src={e.image.url} className={styles.image}/>
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              {e.name}
            </div>
            <div className={styles.date}>{new Date(e.time).toLocaleString()}</div>
            <div className={styles.location}>{e.location}</div>
            <div className={styles.description}>
              {e.description}
            </div>
          </div>
        </div>
        // </Link>
      ))}
      {filterEvents(activeTab).length === 0 && (
        <div>No Upcoming Events</div>
      )}

    </div>
  )
}