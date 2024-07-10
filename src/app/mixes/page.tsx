import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './mixes.module.css'
import { Suspense } from 'react'
import { Mixes } from '@/components/mixes/mixes'

export default function Page() {
  return (
    <div className={styles.container}>
      <PageHeading title="mixes" />
      <Suspense fallback={<>loading</>}>
        <Mixes />
      </Suspense>
    </div>
  )
}