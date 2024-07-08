import Image from "next/image";
import styles from './home.module.css'
import { Suspense } from "react";
import { Articles } from "@/components/articles/articles";
import MuxPlayer from '@mux/mux-player-react';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.wrapper}>
          <div className={styles.headerContainer}>
            <h1>
              <div>In the</div>
              <div>cosmic</div>
              <div>flow</div>
            </h1>
          </div>
          <div className={styles.description}>
            “In The Cosmic Flow” is a vinyl party that highlights DJ’s that identify with the Divine Feminine. The dance party blends disco, house, hip-hop, rnb, and international music to create a vibe that will get you groovin and connected to your highest self.
            {/* <Suspense fallback={<>loading</>}>
              <Articles />
            </Suspense> */}
          </div>
        </div>
      </div>
      <MuxPlayer
        streamType="on-demand"
        playbackId="vBJWS01gN01NAqniv4LoSk602UqjuvdZ399pxhhY6WkDaY"
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#FFFFFF"
        secondaryColor="#000000"
      />
    </main>
  );
}
