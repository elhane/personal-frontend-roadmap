import Link from "next/link";
import styles from '../styles/Navbar.module.scss'
import classNames from 'classnames';
import {SVG} from '../components/svg/index'
import {navLinks} from '../const'
import { useRouter } from 'next/router';

type NavbarProps = {
  className: string
}

function Navbar({className}: NavbarProps ): JSX.Element {
  const navClass = classNames({
    [className]: true,
    [styles.nav]: true
  });
  const router = useRouter();

  console.log(router.asPath)

  return (
    <nav className={navClass}>
      <ul className={styles.nav__list}>
        {
          navLinks.map((link) => (
            <li
              className={classNames(styles.nav__item,
                {[styles.active]: router.asPath === link.href })}
              key={link.name}
            >
              <SVG
                id={link.icon}
                width='40'
                height='40'
              />
              <Link className={styles.nav__link} href={link.href}>{link.name}</Link>
            </li>
          ))
        }
      </ul>

      <div className={styles.nav__copyright}>&copy; Elena Gracheva</div>
    </nav>
  )
}

export default Navbar;
