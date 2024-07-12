import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './booking.module.css'
import { Metadata } from 'next';
import { getMetadata } from '@/util/get-metadata';

export const metadata: Metadata = getMetadata('In The Cosmic Flow | Booking', 'ruby2.jpg', 'In The Cosmic Flow | Booking', 'booking' )

export default function Page() {
  return (
     <div className={styles.container}>
      <PageHeading 
        title="booking" 
      />
    </div>
  )
}