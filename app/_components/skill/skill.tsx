import { lato } from '../../_utilities/fonts'

import styles from './skill.module.scss'

interface SkillProps {
  label: string,
}

const Skill = ({ label, ...props} : SkillProps) => {
  return (
    <li className={`${styles.skill} ${lato.className}`}><a href="#">{label}</a></li>
  )
}

export default Skill