import Image from 'next/image'
import styles from './home.module.css'
export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className="d-flex flex-row">
        <div className={`d-flex flex-column ${styles.mainTagContainer}`}>
          <div className={`ms-2 ${styles.attrA}`}><h3>I am</h3></div>
          <div className={styles.nameTag}>
            <h1><span className={styles.firstName}>Don</span> <br />Benny</h1>
          </div>
        </div>
        <img className={`${styles.myImage}`} src="donmain_page.png" alt="don_displayImage"/>
      </div>
    </main>
  )
}
