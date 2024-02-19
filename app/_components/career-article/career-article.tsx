
import { URL } from 'url'
import { clsx } from 'clsx'
import React, { ReactNode } from 'react'
import Link from 'next/link'

import { Title } from '@/app/_components/title'
import { Group } from '@/app/_components/group'

import { lato } from '@/app/_utilities/fonts'
import classes from './career-article.module.scss'

interface CareerArticleProps {
  content: string,
  dateEnd: Date,
  dateStart: Date,
  linkText: string,
  skills: ReactNode | ReactNode[],
  title: string,
  url: string,
}

const CareerArticle = ({ content, dateEnd, dateStart, linkText, skills, title, url } : CareerArticleProps) => {
  const formatDateForDisplay = (date : Date) => new Date(date).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' })
	
  const formatDateForDatetime = (date: Date) => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${year}-${month}`
  }

  return (
		<article className={clsx(classes.article, lato.className)}>
      <header className={classes.header}>
        <Title
          className={classes.title}
          order={3}
          text={title}
        />
        <div className={classes.metadata}>
          <Link href={url} rel="external">{linkText}</Link>
          <span className={classes.duration}>
            <time dateTime={formatDateForDatetime(dateStart)}>
              {formatDateForDisplay(dateStart)}
            </time>
            {' '}to{' '} 
            <time dateTime={formatDateForDatetime(dateEnd)}>
              {formatDateForDisplay(dateEnd)}
            </time>
          </span>
        </div>
      </header>
      
      <div className={classes.content} dangerouslySetInnerHTML={{ __html: content }} />

      <footer>
        <Group>
          {skills}
        </Group>
      </footer>
    </article>
	)
}

export default CareerArticle