import Link from 'next/link';
import styles from './header.module.css';

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

export const MobileHeader = ({ close, isOpen }: { close: () => void, isOpen: boolean}) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
      <div className={styles.heading}>
        <button className={styles.close} onClick={close}>
          <img src='/icons/close.svg' className={styles.icon}/>
        </button>
        <h2>
          <Link href='/' onClick={() => close()}>
            FEMMIFESTING
          </Link>
        </h2>
      </div>
      <div className={styles.container}>
        {items.map((item, i) => (
          <div className={styles.column} key={i}>
            <h5>{item.top}</h5>
            <ul>
              {item.options.map((option, o) => (
                <li key={o}>
                  <Link href={option.link} onClick={() => close()}>
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}