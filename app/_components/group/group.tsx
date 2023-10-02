import React, { ReactNode } from 'react'
import styles from './group.module.scss'

interface GroupProps {
  children: ReactNode | ReactNode[]
}

const Group = ({ children } : GroupProps) => {
	const childrenArray = React.Children.toArray(children)

	if (childrenArray.length === 0) {
    return null
  }

	return (
		<ul className={styles.group} data-testid="group">
			{childrenArray.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
		</ul>
	)
}

export default Group