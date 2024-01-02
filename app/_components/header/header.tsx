import { clsx } from 'clsx'
import { lato } from '../../_utilities/fonts'

import styles from './header.module.scss'

interface HeaderProps {
  title: string,
}

const Header = ({ title } : HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={clsx(styles.h1, lato.className)}>{title}</h1>
    </header>
  )
}

export default Header