import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './djs.module.css'

export default async function Page() {
  return (
    <div className={styles.container}>
      <PageHeading 
        title="djs" 
      />
    </div>
  )
}