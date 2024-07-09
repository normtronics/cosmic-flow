"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from './contact.module.css'
import { useMutation } from "@apollo/client";
import { contactMutation } from "@/queries/create-contact";


export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });
   const [mutateFunction, { data, loading, error }] = useMutation(contactMutation)

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  // Shows alert message for form submission feedback
  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };


  const onSubmit = (e: any) => {
    e.preventDefault()

    try {
      setDisabled(true);

      const templateParams = {
        name: e.target["name"].value,
        email: e.target["email"].value,
        subject: e.target["subject"].value,
        message: e.target["message"].value,
        site: window.location.origin
      };

      mutateFunction({ variables: templateParams })
     
      toggleAlert('Form submission was successful!', 'success');

    } catch(e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
          {alertInfo.display && (
            <div
              className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
              role='alert'
            >
              {alertInfo.message}
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='alert'
                aria-label='Close'
                onClick={() =>
                  setAlertInfo({ display: false, message: '', type: '' })
                } 
              ></button>
            </div>
          )}
        <input 
          className={styles.name}
          placeholder="name"
          type="text"
          name="name"
        />
        <input 
          className={styles.email}
          placeholder="email"
          type="email"
          name="email"
        />
        <input 
          className={styles.subject}
          placeholder="subject"
          type="text"
          name="subject"
        />
        <input 
          className={styles.message} 
          placeholder="message"
          type="text"
          name="message"
        />
        <button type="submit" disabled={disabled}>Send</button>
      </form>
    </div>
  );
};
