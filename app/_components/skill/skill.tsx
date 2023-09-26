import Link from 'next/link'

import { lato } from '../../_utilities/fonts'

import styles from './skill.module.scss'

interface SkillProps {
  label: string,
	url: string,
}

const Skill = ({ label, url, ...props} : SkillProps) => {
  return (
    <li className={`${styles.skill} ${lato.className}`}><Link href={url}>{label}</Link></li>
  )
}

export default Skill