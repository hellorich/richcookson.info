import styles from './skill.module.scss'

interface SkillProps {
  label: string,
}

const Skill = ({ label, ...props} : SkillProps) => {
  return (
    <span className={styles.skill}>{label}</span>
  )
}

export default Skill