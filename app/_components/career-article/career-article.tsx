import React, { ReactNode } from 'react'
import { URL } from 'url'
import Link from 'next/link'
import Group from '../group/group'

import { lato } from '../../_utilities/fonts'

import styles from './career-article.module.scss'

interface CareerArticleProps {
  content: ReactNode | ReactNode[],
  dateEnd: Date,
  dateStart: Date,
  linkText: string,
  skills: ReactNode | ReactNode[],
  title: string,
  url: URL,
}

const CareerArticle = ({ content, dateEnd, dateStart, linkText, skills, title, url } : CareerArticleProps) => {
  const formatDateForDisplay = (date : Date) => new Date(date).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' })
	
  const formatDateForDatetime = (date: Date) => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${year}-${month}`
  }

  return (
		<article className={`${styles.article} ${lato.className}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.metadata}>
          <Link href={url}>{linkText}</Link>
          <span className={styles.duration}>
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
    
      <div className={styles.content}>
        {content}
      </div>

      <footer>
        <Group>
          {skills}
        </Group>
      </footer>
    </article>
	)
}

export default CareerArticle