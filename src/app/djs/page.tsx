import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './djs.module.css'
import { DJS } from '@/components/djs/djs'
import { Suspense } from 'react'
import { Loading } from '@/components/loading/loading'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <div className={styles.container}>
      <PageHeading 
        title="past djs" 
        style={{
          maxWidth: 1200
        }}
      />
      <Suspense fallback={<Loading />}>
        <DJS />
      </Suspense>
    </div>
  )
}