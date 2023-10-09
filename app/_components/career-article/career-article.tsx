import React from 'react'
import { URL } from 'url'
import Link from 'next/link'

import Group from '../group/group'

import { lato } from '../../_utilities/fonts'

import styles from './career-article.module.scss'

interface CareerArticleProps {
  children: React.ReactNode,
  dateEnd: Date,
  dateStart: Date,
  skills: React.ReactNode,
  title: string,
  url: URL,
}

const CareerArticle = ({ children, dateEnd, dateStart, skills, title, url } : CareerArticleProps) => {
	const linkText = url.hostname
	const isoDateEnd: string = dateEnd.toISOString()
	const isoDateStart: string = dateStart.toISOString()
  const formatDate = (date : Date) : string => date.toLocaleDateString('en-gb', { year: 'numeric', month: 'short' })
	
	return (
		<article className={`${styles.article} ${lato.className}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.metadata}>
          <Link href={url}>{linkText}</Link>
          <span className={styles.duration}>
            <time dateTime={isoDateStart}>{formatDate(dateStart)}</time> to <time dateTime={isoDateEnd}>{formatDate(dateEnd)}</time>
          </span>
        </div>
      </header>
    
      <div className={styles.content}>
        {children}
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