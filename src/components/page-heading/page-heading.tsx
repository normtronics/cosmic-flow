import { CSSProperties } from 'react'
import styles from './page-heading.module.css'

export const PageHeading = ({ title, center = false, style }: { title: string, center?: boolean, style?: CSSProperties }) => {
  return (
    <div className={`${styles.wrapper} ${ center ? styles.center : ''} `} style={style}>
      <h1 className={styles.heading}>
        {title}
      </h1>
    </div>
  )
}