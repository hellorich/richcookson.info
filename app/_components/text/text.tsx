import { clsx } from 'clsx'
import { lato } from '@/app/_utilities/fonts'
import classes from './text.module.scss'

interface TextProps {
  children: string
  inline?: boolean
}

const Text = ({ children, inline }: TextProps) => {
  const Tag = inline ? 'span' : 'p'

  return (
    <Tag
      className={clsx(inline ? classes.span : classes.p, lato.className)}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: children is my own HTML from app/_content, not user input
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

export default Text
