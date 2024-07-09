import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './booking.module.css'

export default function Page() {
  return (
     <div className={styles.container}>
      <PageHeading title="booking" />
    </div>
  )
}