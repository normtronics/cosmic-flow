import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './events.module.css'
import { Suspense } from 'react'
import { Events } from '@/components/events/events'

export default function Page() {
  return (
    <div className={styles.container}>
      <PageHeading title="events"  style={{ maxWidth: 900 }}/>
      <Suspense fallback={<>loading</>}>
        <Events />
      </Suspense>
    </div>
  )
}