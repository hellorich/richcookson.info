
import React from 'react'
import classes from './block.module.scss'

interface BlockProps {
  children: React.ReactNode
}

const Block = ({ children } : BlockProps) => 
  <div className={classes.div}>{children}</div>

export default Block