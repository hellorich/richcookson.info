import { URL } from 'url'
import { IconContext } from 'react-icons'
import Link from 'next/link'

import { lato } from '../../_utilities/fonts'

import styles from './button.module.scss'

interface ButtonProps {
	icon: React.ReactNode,
  text: string,
	url: URL,
}

const Button = ({ icon, text, url } : ButtonProps) => {
  return (
    <Link className={`${styles.button} ${lato.className}`} href={url}>
			<IconContext.Provider value={{ className: styles.icon }}>
				{icon}
			</IconContext.Provider>
			<span className={styles.text}>
				{text}
			</span>
		</Link>
  )
}

export default Button