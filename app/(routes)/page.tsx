import Header from '../_components/header/header'
import CareerArticle from '../_components/career-article/career-article'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Rich Cookson" />
      <CareerArticle
        dateEnd="01-2023"
        dateStart="10-2022"
        title=""
        url=""
      >
        test
      </CareerArticle>
    </main>
  )
}
