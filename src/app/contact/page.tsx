import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './contact.module.css'
import { ContactForm } from '@/components/contact/contect';
import { Metadata } from 'next';
import { getMetadata } from '@/util/get-metadata';

export const metadata: Metadata = getMetadata('In The Cosmic Flow | Contact', 'ruby2.jpg', 'In The Cosmic Flow | Contact', 'contact' )

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