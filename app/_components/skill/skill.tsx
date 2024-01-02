import { URL } from 'url'
import { clsx } from 'clsx'
import Link from 'next/link'

import { lato } from '@/app/_utilities/fonts'
import styles from './skill.module.scss'

interface SkillProps {
  text: string,
	url: URL,
}

const Skill = ({ text, url } : SkillProps) => {
  return (
    <Link className={clsx(styles.skill, lato.className)} href={url}>{text}</Link>
  )
}

export default Skill