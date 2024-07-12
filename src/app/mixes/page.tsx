import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './mixes.module.css'
import { Suspense } from 'react'
import { Mixes } from '@/components/mixes/mixes'
import { Loading } from '@/components/loading/loading'
import { Metadata } from 'next'
import { getMetadata } from '@/util/get-metadata'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = getMetadata('In The Cosmic Flow | Mixes', 'ruby2.jpg', 'In The Cosmic Flow | Mixes', 'mixes' )

export default async function Page() {
  return (
    <div className={styles.container}>
      <PageHeading 
        title="mixes" 
        style={{
          maxWidth: 900
        }}
      />
      <Suspense fallback={<Loading />}>
        <Mixes />
      </Suspense>
    </div>
  )
}