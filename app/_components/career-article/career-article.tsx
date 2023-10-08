import { ReactNode } from 'react'
import Link from 'next/link'

import Group from '../group/group'

import { lato } from '../../_utilities/fonts'

import styles from './career-article.module.scss'

interface CareerArticleProps {
  children: any,
  dateEnd: string,
  dateStart: string,
  skills: ReactNode | ReactNode[],
  title: string,
  url: string,
}

const CareerArticle = ({ children, dateEnd, dateStart, skills, title, url } : CareerArticleProps) => {
  const formatDate = (date : string) => new Date(date).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' })
	return (
		<article className={`${styles.article} ${lato.className}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.metadata}>
          <Link href={url}>www.hugoandcat.com</Link>
          <span className={styles.duration}>
            <time dateTime={dateStart}>{formatDate(dateStart)}</time> to <time dateTime={dateEnd}>{formatDate(dateEnd)}</time>
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
      {/* Footer here for skill tags */}
    </article>
	)
}

export default CareerArticle