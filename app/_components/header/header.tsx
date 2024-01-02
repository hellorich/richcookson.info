import { Title } from '@/app/_components/title'

import classes from './header.module.scss'

interface HeaderProps {
  title: string,
}

const Header = ({ title } : HeaderProps) => {
  return (
    <header className={classes.header}>
      <Title 
        className={classes.h1}
        order={1}
        text={title}
      />
    </header>
  )
}

export default Header