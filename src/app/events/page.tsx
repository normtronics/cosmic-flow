import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './events.module.css'
import { Suspense } from 'react'
import { Events } from '@/components/events/events'
import { Loading } from '@/components/loading/loading'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <div className={styles.container}>
      <PageHeading title="events"  style={{ maxWidth: 900 }}/>
      <Suspense fallback={<Loading />}>
        <Events />
      </Suspense>
    </div>
  )
}