import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.videoOverlay}></div>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src="https://rosecribradio.sfo2.cdn.digitaloceanspaces.com/cms/djclip.mp4" type="video/mp4" />
      </video>
      <div className={styles.topContainer}>
        <div className={styles.wrapper}>
          <div className={styles.headerContainer}>
            <h1>
              <div className={styles.femmifesting}>Femmifesting® Presents</div>
              <div>In the</div>
              <div>cosmic</div>
              <div>flow</div>
            </h1>
          </div>
          <div className={styles.description}>
            “In The Cosmic Flow” is a vinyl party that highlights DJ’s that identify with the Divine Feminine. The dance party blends disco, house, hip-hop, rnb, and international music to create a vibe that will get you groovin and connected to your highest self.
          </div>
        </div>
      </div>
    </main>
  );
}
