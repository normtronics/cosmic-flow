import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './video.module.css'
import MuxPlayer from '@mux/mux-player-react'
import Link from 'next/link'
import { Metadata } from 'next';
import { getMetadata } from '@/util/get-metadata';

export const metadata: Metadata = getMetadata('In The Cosmic Flow | Video', 'ruby2.jpg', 'In The Cosmic Flow | Video', 'video' )

export default async function Page() {
  return (
    <div className={styles.container}>
      <PageHeading title="video" />

      <div className={styles.grid}>

        <div className={styles.video}>
          <h2>IN THE COSMIC FLOW VOL. 2</h2>
          <div className={styles.details}>
            <div className={styles.title}>Open Tables Edition in collaboration with <Link href='https://www.instagram.com/ol.youngster/'>Ol.Youngster</Link></div>
            <div className={styles.djs}>DJs: Perri Love, Jasmine Bailey, Fairy Strange, Peshak پشک, Diosa Discoteka</div>
            <div className={styles.location}>The Stowaway, Rio Room, Los Angeles</div>
            <div className={styles.date}>July.3.2024</div>
          </div>
          <MuxPlayer
            streamType="on-demand"
            playbackId="vBJWS01gN01NAqniv4LoSk602UqjuvdZ399pxhhY6WkDaY"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
        </div>

        <div className={styles.video}>
          <h2>IN THE COSMIC FLOW VOL. 1</h2>
          <div className={styles.details}>
            <div className={styles.title}>Live stream @ The Rose Crib</div>
            <div className={styles.djs}>DJs: Peshak پشک & Diosa Discoteka</div>
            <div className={styles.location}>The Rose Crib, Arts District, Los Angeles</div>
            <div className={styles.date}>June.7.2024</div>
          </div>
          <MuxPlayer
            streamType="on-demand"
            playbackId="qqEzAy00cFQIQU02xcX02i1vFMskXUkwQ91HTBxfQ60201uc"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
        </div>
      </div>
    </div>
  )
}