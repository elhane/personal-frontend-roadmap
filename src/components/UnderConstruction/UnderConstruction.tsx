import styles from './UnderConstruction.module.scss'
import {Link} from 'react-router-dom';
import emptyPageImage from '../../images/under-construction.svg'

function UnderConstruction():JSX.Element {
  return (
    <section className={styles.page}>
      <h1 className={styles.page__title}>The page is under construction</h1>
        <img src={emptyPageImage} width={750} height={500} alt="under-construction"/>
      <Link className={`link ${styles.page__link}`} to="/">Back home</Link>
    </section>
  )
}

export default UnderConstruction;
