import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './about.module.css'
import { faInstagram, faTwitter, faTiktok, faYoutube, faSafari, faMixcloud } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Metadata } from 'next'
import { getMetadata } from '@/util/get-metadata'

const team = [{
  image: 'ruby2.jpg',
  name: 'Peshak پشک',
  role: 'Co-Founder',
  bio: '<div>The DJ alias of singer and producer <a href="https://www.rubymountain.xyz/">Ruby Mountain</a>, blends global influences together sharing the energy of the Bay Area, the soul of Detroit, the rhythms of South Asia, and the pulse of London, giving soulful bounce and infectious house sets<div>',
  socials: [
    {
      type: 'IG',
      link: 'https://www.instagram.com/ruby.mountain/'
    },
    {
      type: 'YT',
      link: 'https://www.youtube.com/@rubymountain'
    },
    {
      type: 'WS',
      link: 'https://www.rubymountain.xyz/'
    },
    {
      type: 'TT',
      link: 'https://www.tiktok.com/@rubymountain'
    },
    {
      type: 'MC',
      link: 'https://www.mixcloud.com/Peshak'
    },
  ]
},
{
  image: 'ruby.jpg',
  name: 'Diosa Discoteka',
  role: 'Collaborator',
  bio: '<div>She is a multifaceted artist from Boyle Heights, California. As a DJ she hopes to inspire authenticity and connection to oneself with her selection of music that is often funk, soul and disco.</div>',
  socials: [
    {
      type: 'IG',
      link: 'https://www.instagram.com/chuuuchix/'
    },
    // {
    //   type: 'MC',
    //   link: 'https://www.mixcloud.com/therosecrib/'
    // },
  ]
}]

const getSocialIcon  = (icon: string, link: string) => {
  if(icon === 'IG') {
    return (
      <Link href={`${link}`} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2xl"/>
      </Link>
    )
  }

  if(icon === 'YT') {
    return (
      <Link href={`${link}`} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faYoutube} size="2xl"/>
      </Link>
    )
  }

  if(icon === 'WS') {
    return (
      <Link href={`${link}`} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faSafari} size="2xl"/>
      </Link>
    )
  }

  if(icon === 'TT') {
    return (
      <Link href={`${link}`} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faTiktok} size="2xl"/>
      </Link>
    )
  }

  if(icon === 'TW') {
    return (
      <Link href={`${link}`} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2xl"/>
      </Link>
    )
  }

  if(icon === 'MC') {
    return (
      <Link href={`${link}`} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faMixcloud} size="2xl"/>
      </Link>
    )
  }

}

export const metadata: Metadata = getMetadata('In The Cosmic Flow | About', 'ruby2.jpg', 'In The Cosmic Flow | About', 'about' )

export default async function Page() {
  return (
     <div className={styles.container}>
      <PageHeading 
        title="about" 
        style={{
          maxWidth: 700
        }}
      />

      <div className={styles.about}>
       “In The Cosmic Flow,” a <a href='https://femmifesting.com/'>Femmifesting®</a> event,  
       is a vinyl party that highlights DJ’s that 
       identify with the Divine Feminine. The dance 
       party blends disco, house, hip-hop, rnb, and 
       international music to create a vibe that will 
       get you groovin and connected to your highest self.
      </div>

      <div className={styles.about}>
        <a href='https://femmifesting.com/'>Femmifesting®</a> is a brand creating 
        experiences and apparel to help you 
        tap into your divine feminine energy 
        and live in alignment with your most 
        authentic self. Ditch the hustle, embrace 
        harmony. The universe wants to give you what 
        you want. You just need to align with its cosmic flow. 
        Trust your intuition and let your desires flow effortlessly towards you. <a href='https://femmifesting.com/'>Femmifesting®</a> supports you in receiving what you desire and embracing your true, powerful self.
      </div>

      <div className={styles.about}>
        Every party we build an altar. Good vibes flow with our intentions and fire beats into the cosmos.
        <div className={styles.teamGrid}>
          <img className={styles.image} src='alter1.jpg' />
          <img className={styles.image} src='alter2.jpg' />
        </div>
      </div>

      <div className={styles.team}>
        <h2>IN THE COSMIC FLOW FOUNDERS</h2>

        <div className={styles.teamGrid}>
          {team.map((t, index) => (
            <div className={styles.teamCard} key={index}>
              <img src={t.image} className={styles.image}/>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.role}>{t.role}</div>
              <div className={styles.bio} dangerouslySetInnerHTML={{ __html: t.bio }} />
              <div className={styles.socials}>
                {t.socials.map( (s, i) => (
                  <div className={styles.icon} key={i}>
                   {getSocialIcon(s.type, s.link)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}