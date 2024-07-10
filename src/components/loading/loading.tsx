"use client"

import CircleLoader from "react-spinners/CircleLoader";
import styles from './loader.module.css'

export const Loading = () => {
  return (
    <div className={styles.container}>
      <CircleLoader
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#ffffff"
      />
    </div>
  )
}