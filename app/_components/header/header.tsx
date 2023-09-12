import { lato } from '../../_utilities/fonts'

import styles from './header.module.scss'

interface HeaderProps {
  title: string,
}

const Header = ({ title, ...props} : HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.h1} ${lato.className}`}>{title}</h1>
    </header>
  )
}

export default Header