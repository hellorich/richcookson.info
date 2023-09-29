import Link from 'next/link'

import { lato } from '../../_utilities/fonts'

import styles from './skill.module.scss'

interface SkillProps {
  text: string,
	url: string,
}

const Skill = ({ text, url } : SkillProps) => {
  return (
    <li className={`${styles.skill} ${lato.className}`}><Link href={url}>{text}</Link></li>
  )
}

export default Skill