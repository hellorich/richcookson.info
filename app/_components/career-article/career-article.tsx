import Link from 'next/link'

import { lato } from '../../_utilities/fonts'

import styles from './career-article.module.scss'

interface CareerArticleProps {
  children: any,
  dateEnd: string,
  dateStart: string,
  title: string,
  url: string,
}

const CareerArticle = ({ children, dateEnd, dateStart, title, url } : CareerArticleProps) => {
	return (
		<article className={`${styles.article} ${lato.className}`}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{title}</h3>
        <div className={styles.metadata}>
          <Link href={url}>www.hugoandcat.com</Link>
          <span className={styles.duration}>
            <time dateTime={dateStart}></time> to <time dateTime={dateEnd}></time>
          </span>
        </div>
      </header>
    
      <div className={styles.content}>
        {children}
      </div>

      {/* Footer here for skill tags */}
    </article>
	)
}

export default CareerArticle