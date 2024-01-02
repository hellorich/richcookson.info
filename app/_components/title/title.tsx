import { clsx } from 'clsx'
import { lato } from '@/app/_utilities/fonts'
import classes from './title.module.scss'

interface TitleProps {
  className?: string;
  order: number;
  text: string;
}

const Title = ({ className, order, text }: TitleProps) => {
  switch (order) {
    case 1:
      return <h1 className={clsx(classes.h1, lato.className, className)}>{text}</h1>
    case 2:
      return <h2 className={clsx(classes.h2, lato.className, className)}>{text}</h2>
    case 3:
      return <h3 className={clsx(classes.h3, lato.className, className)}>{text}</h3>
    default:
      return <h1 className={clsx(classes.h1, lato.className, className)}>{text}</h1>
  }
}

export default Title
