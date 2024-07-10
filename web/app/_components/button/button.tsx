import Link from 'next/link'
import { clsx } from 'clsx'

import { lato } from '@/app/_utilities/fonts'
import classes from './button.module.scss'

interface ButtonProps {
	icon: React.ReactNode,
  text: string,
	url: string,
}

const Button = ({ icon, text, url } : ButtonProps) => {
  return (
    <Link className={classes.button} href={url}>
			{icon}
			<span className={clsx(classes.text, lato.className)}>
				{text}
			</span>
		</Link>
  )
}

export default Button