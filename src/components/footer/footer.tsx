import Link from 'next/link'
import styles from './footer.module.css'

const items = [
  {
    top: 'Category',
    options: [
      {
        link: '/events',
        name: 'events'
      },
      {
        link: '/mixes',
        name: 'mixes'
      },
      {
        link: '/video',
        name: 'video'
      },
      {
        link: '/about',
        name: 'about'
      },
      {
        link: '/contact',
        name: 'contact'
      },
    ]
  },
  {
    top: 'Follow',
    options: [
      {
        link: 'https://www.youtube.com/@therosecrib',
        name: 'Youtube'
      },
      {
        link: 'https://www.instagram.com/femmifesting/',
        name: 'Instagram'
      },
    ]
  },
  {
    top: 'Work with us',
    options: [
      {
        link: '/contact',
        name: 'Contact Us'
      },
      {
        link: '/submit',
        name: 'Submit to perform'
      },
      {
        link: '/booking',
        name: 'Booking'
      },
    ]
  }
]

const footer = [
  {
    name: 'Terms of use',
    link: '/terms'
  },
  {
    name: 'Privacy policy',
    link: '/terms'
  },{
    name: 'Do not share my personal information',
    link: '/terms'
  },{
    name: 'California policy',
    link: '/terms'
  },{
    name: 'Site map',
    link: '/terms'
  },{
    name: 'Public Notice',
    link: '/terms'
  },
  {
    name: 'Accessibility Statement',
    link: '/terms'
  },
  {
    name: '2024 The Rose Crib',
    link: ''
  }
]

export const Footer = () => {
  return (
    <div>
      <div className={`${styles.mobileMenu}`}>
        <div className={styles.container}>
          {items.map((item, i) => (
            <div className={styles.column} key={i}>
              <h5>{item.top}</h5>
              <ul>
                {item.options.map((option, o) => (
                  <li key={o}>
                    <Link href={option.link}>
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <ul>
            {footer.map((f, i) => (
              <li key={i}>
                <Link href={f.link}>
                  {f.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}