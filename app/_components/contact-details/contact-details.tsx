import styles from './contact-details.module.scss'

interface ButtonProps {
	children: any,
}

const ContactDetails = ({ children } : ButtonProps) => {
	return (
		<div className={styles['contact-details']}>
			{children}
		</div>
	)
}

export default ContactDetails