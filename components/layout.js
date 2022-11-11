import Navbar from './navbar'
import styles from '../styles/Layout.module.scss'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar className={styles.navbar} />
            <main className={styles.main}>{children}</main>
        </div>
    )
}