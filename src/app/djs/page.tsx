import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './djs.module.css'
import { DJS } from '@/components/djs/djs'
import { Suspense } from 'react'
import { Loading } from '@/components/loading/loading'
import { Metadata } from 'next'
import { getMetadata } from '@/util/get-metadata'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = getMetadata('In The Cosmic Flow | DJS', 'ruby2.jpg', 'In The Cosmic Flow | DJS', 'djs' )

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