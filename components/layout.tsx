import React, { ReactNode } from "react";
import Navbar from './navbar'
import styles from '../styles/Layout.module.scss'

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
    return (
        <div className={styles.container}>
            <Navbar className={styles.navbar} />
            <main className={styles.main}>{children}</main>
        </div>
    )
}
