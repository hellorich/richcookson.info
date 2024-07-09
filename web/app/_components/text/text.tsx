import { clsx } from 'clsx'
import { lato } from '@/web/app/_utilities/fonts'
import classes from './text.module.scss'

interface TextProps {
  children: string,
  inline?: boolean
}

const Text = ({ children, inline }: TextProps) => 
  inline ? 
    <span className={clsx(classes.span, lato.className)} dangerouslySetInnerHTML={{ __html: children }} /> : 
    <p className={clsx(classes.p, lato.className)} dangerouslySetInnerHTML={{ __html: children }} />

export default Text
