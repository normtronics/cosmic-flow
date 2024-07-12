import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './submit.module.css'
import { Metadata } from 'next'
import { getMetadata } from '@/util/get-metadata'

export const metadata: Metadata = getMetadata('In The Cosmic Flow | Submit', 'ruby2.jpg', 'In The Cosmic Flow | Submit', 'submit' )

export default function Page() {
  return (
    <div className={styles.container}>
      <PageHeading title="submit" />
    </div>
  )
}