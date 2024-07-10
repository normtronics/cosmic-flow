import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './video.module.css'
import MuxPlayer from '@mux/mux-player-react'

export default async function Page() {
  return (
    <div className={styles.container}>
      <PageHeading title="video" />

      <div className={styles.grid}>

        <div className={styles.video}>
          <h2>IN THE COSMIC FLOW VOL.2</h2>
          <div className={styles.details}>
            <div>Open Tables Edition in collaboration with Ol.Youngster</div>
            <div>DJs: perri love, Jasmine Bailey, Fairy Strange, Peshak, Diosa Discoteka</div>
            <div>The Stowaway, Rio Room, Los Angeles</div>
            <div>July.3.2024</div>
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
          <h2>IN THE COSMIC FLOW VOL.1</h2>
          <div className={styles.details}>
            <div>Live stream @ The Rose Crib</div>
            <div>DJs: Peshak & Diosa Discoteka</div>
            <div>The Rose Crib, Arts District, Los Angeles</div>
            <div>June.7.2024</div>
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