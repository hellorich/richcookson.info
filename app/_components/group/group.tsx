import React from 'react'
import { clsx } from 'clsx'

import classes from './group.module.scss'

interface GroupProps {
  children?: React.ReactNode
	stack?: boolean
}

// Make it expect an array of react components?
const Group = ({ children, stack } : GroupProps) => {
	const childrenArray = React.Children.toArray(children)

	if (childrenArray.length === 0) {
    return null
  }

	return (
		<ul className={clsx({
			[classes.group]: true,
			[classes.stack]: stack,
		})} data-testid="group">
			{childrenArray.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
		</ul>
	)
}

export default Group