import { URL } from 'url'
import { clsx } from 'clsx'
import { IconContext } from 'react-icons'
import Link from 'next/link'

import { lato } from '@/app/_utilities/fonts'
import classes from './button.module.scss'

interface ButtonProps {
	icon: React.ReactNode,
  text: string,
	url: string,
}

const Button = ({ icon, text, url } : ButtonProps) => {
  return (
    <Link className={clsx(classes.button, lato.className)} href={url}>
			<IconContext.Provider value={{ className: classes.icon }}>
				{icon}
			</IconContext.Provider>
			<span className={classes.text}>
				{text}
			</span>
		</Link>
  )
}

export default Button