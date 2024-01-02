import { clsx } from 'clsx'

import classes from './title.module.scss'

interface TitleProps {
  className?: string;
  order: number;
  text: string;
}

const Title = ({ className, order, text }: TitleProps) => {
  switch (order) {
    case 1:
      return <h1 className={clsx(classes.h1, className)}>{text}</h1>
    case 2:
      return <h2>{text}</h2>
    case 3:
      return <h3>{text}</h3>
    case 4:
      return <h4>{text}</h4>
    case 5:
      return <h5>{text}</h5>
    default:
      return <h1>{text}</h1>
  }
}

export default Title
