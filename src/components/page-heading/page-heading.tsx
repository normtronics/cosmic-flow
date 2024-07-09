import styles from './page-heading.module.css'

export const PageHeading = ({ title }: { title: string}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>
        {title}
      </h1>
    </div>
  )
}