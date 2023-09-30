import Link from 'next/link'

import { lato } from '../../_utilities/fonts'

import styles from './skill.module.scss'

interface SkillProps {
  text: string,
	url: string,
}

const Skill = ({ text, url } : SkillProps) => {
  return (
    <Link className={`${styles.skill} ${lato.className}`} href={url}>{text}</Link>
  )
}

export default Skill