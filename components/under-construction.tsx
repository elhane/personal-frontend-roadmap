import styles from '../styles/UnderConstruction.module.scss'
import Image from 'next/image';
import emptyPageImage from '../public/under-construction.svg';
import Link from 'next/link';

function UnderConstruction():JSX.Element {
  return (
    <section className={styles.page}>
      <h1 className={styles.page__title}>The page is under construction</h1>
      <Image src={emptyPageImage} alt="under construction"/>
      <Link className={`link ${styles.page__link}`} href="/">Back home</Link>
    </section>
  )
}

export default UnderConstruction;
