import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './mixes.module.css'
import { Suspense } from 'react'
import { Mixes } from '@/components/mixes/mixes'
import { Loading } from '@/components/loading/loading'

export default function Page() {
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