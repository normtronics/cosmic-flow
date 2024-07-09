import { PageHeading } from '@/components/page-heading/page-heading'
import styles from './about.module.css'
import { faInstagram, faTwitter, faTiktok, faPinterest, faYoutube, faSafari } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const team = [{
  image: 'ruby2.jpg',
  name: 'Peshak پشک',
  role: 'Co-Founder',
  bio: 'The DJ alias of artist Ruby Mountain, blends global influences together sharing the energy of the Bay Area, the soul of Detroit, the rhythms of South Asia, and the pulse of London, giving soulful bounce and infectious house sets',
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
    }
  ]
},
{
  image: 'ruby.jpg',
  name: 'Diosa Discoteka',
  role: 'Co-Founder',
  bio: 'She is a multifaceted artist from Boyle Heights, California. As a DJ she hopes to inspire authenticity and connection to oneself with her selection of music that is often funk, soul and disco.',
  socials: [
    {
      type: 'IG',
      link: 'https://www.instagram.com/chuuuchix/'
    },
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

}

export default function Page() {
  return (
     <div className={styles.container}>
      <PageHeading 
        title="about" 
        style={{
          maxWidth: 700
        }}
      />

      <div className={styles.about}>
        “In The Cosmic Flow” is a vinyl party that highlights DJ’s 
        that identify with the Divine Feminine. 
        The dance party blends disco, house, hip-hop, rnb, 
        and international music to create a vibe that will 
        get you groovin and connected to your highest self.
      </div>

      <div className={styles.team}>
        <h2>The Team</h2>

        <div className={styles.teamGrid}>
          {team.map((t, index) => (
            <div className={styles.teamCard} key={index}>
              <img src={t.image} className={styles.image}/>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.role}>{t.role}</div>
              <div className={styles.bio}>{t.bio}</div>
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