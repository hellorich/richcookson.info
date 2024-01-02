import { clsx } from 'clsx'
import React from 'react'
import styles from './group.module.scss'

interface GroupProps {
  children?: React.ReactNode,
}
// Make it expect an array of react components?
const Group = ({ children } : GroupProps) => {
	const childrenArray = React.Children.toArray(children)

	if (childrenArray.length === 0) {
    return null
  }

	return (
		<ul className={clsx(styles.group)} data-testid="group">
			{childrenArray.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
		</ul>
	)
}

export default Group