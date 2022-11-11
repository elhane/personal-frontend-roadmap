import Link from "next/link";
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/interviews">Main page</Link>
                </li>
                <li>
                    <Link href="/interviews">Everyday todos</Link>
                </li>
                <li>
                    <Link href="/interviews">Hard Skills</Link>
                </li>
                <li>
                    <Link href="/interviews">Soft skills</Link>
                </li>
                <li>
                    <Link href="/interviews">Interviews</Link>
                </li>
                <li>
                    <Link href="/interviews">Job stats</Link>
                </li>
                <li>
                    <Link href="/interviews">Test tasks</Link>
                </li>

            </ul>
        </nav>
    )
}