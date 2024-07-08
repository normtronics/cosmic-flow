import Link from 'next/link';
import styles from './header.module.css';

const items = [
  {
    top: 'Category',
    options: [
      {
        link: '/music',
        name: 'music'
      },
      {
        link: '/video',
        name: 'video'
      },
      {
        link: '/art',
        name: 'art'
      },
      {
        link: '/radio',
        name: 'radio'
      },
      {
         link: '/live',
        name: 'live'
      },
      {
         link: '/nfts',
        name: 'nfts'
      },
      {
        link: '/merch',
        name: 'merch'
      }
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
        link: 'https://www.instagram.com/therosecrib/',
        name: 'Instagram'
      },
    ]
  },
  {
    top: 'Sister Brands',
    options: [
      {
        link: 'https://www.youtube.com/@therosecrib',
        name: 'Femmifesting'
      },
      {
        link: 'https://www.instagram.com/therosecrib/',
        name: 'Art of Digging'
      },
    ]
  },
  {
    top: 'Read On',
    options: [
      {
        link: '/music',
        name: 'APPLE NEWS'
      },
      {
        link: '/video',
        name: 'FLIPBOARD'
      },
      {
        link: '/art',
        name: 'GOOGLE NEWS'
      },
      {
        link: '/art',
        name: 'RSs feed'
      },
    ]
  },
  {
    top: 'The Rose Crib Global',
    options: [
      {
        link: '/music',
        name: 'United States'
      },
      {
        link: '/video',
        name: 'Japan'
      },
      {
        link: '/art',
        name: 'United Kingdom'
      },
    ]
  },
  {
    top: 'Work with us',
    options: [
      {
        link: '/music',
        name: 'Advertise'
      },
      {
        link: '/video',
        name: 'Contact Us'
      },
      {
        link: '/art',
        name: 'Submit to radio'
      },
      {
        link: '/art',
        name: 'Write for us'
      },
    ]
  }
]

const footer = [{
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
}]

export const MobileHeader = ({ close, isOpen }: { close: () => void, isOpen: boolean}) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
      <div className={styles.heading}>
        <button className={styles.close} onClick={close}>
          <img src='/icons/close.svg' className={styles.icon}/>
        </button>
        <h2>THE ROSE CRIB</h2>
      </div>
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
  )
}