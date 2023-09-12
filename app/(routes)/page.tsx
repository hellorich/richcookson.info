import Header from '../_components/header/header'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Rich Cookson" />
    </main>
  )
}
