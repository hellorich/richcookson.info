import { Title } from '@/app/_components/title'
import { ButtonPDF } from '@/app/_components/button-pdf'

import classes from './header.module.scss'

interface HeaderProps {
  title: string,
}

const Header = ({ title } : HeaderProps) => {
  return (
    <header className={classes.header}>
      <div className={classes['header-inner']}>
        <Title 
          className={classes.h1}
          order={1}
          text={title}
        />
        <ButtonPDF />
      </div>
    </header>
  )
}

export default Header