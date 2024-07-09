import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './about.module.css'

export default function Page() {
  return (
     <div className={styles.container}>
      <PageHeading title="about" />
    </div>
  )
}