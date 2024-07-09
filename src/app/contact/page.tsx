import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './contact.module.css'
import { ContactForm } from '@/components/contact/contect';

export default function Page() {
  return (
    <div className={styles.container}>
      <PageHeading 
        title="contact" 
        style={{
          maxWidth: 700
        }}
      />
      <ContactForm />
    </div>
  )
}