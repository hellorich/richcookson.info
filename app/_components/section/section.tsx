import { clsx } from 'clsx'
import React, { ReactNode } from 'react'

import { Title } from '@/app/_components/title'

import { lato } from '@/app/_utilities/fonts'
import classes from './section.module.scss'

interface SectionProps {
  children?: ReactNode | ReactNode[],
  description?: ReactNode | ReactNode[],
  title: string,
}

const Section = ({ children, description, title } : SectionProps) => {
  return (
    <section className={classes.section} data-testid="section">
      {!description ? (
        <Title
          className={classes.h2}
          order={2}
          text={title}
        />
      ) : (
        <header>
          <Title
            className={classes.h2}
            order={2}
            text={title}
          />
          <div className={clsx(classes.description, lato.className)}>
            {description}
          </div>
        </header>
      )}

      {children}
    </section>
  )
}

export default Section