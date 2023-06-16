import Image from 'next/image'
import styles from './home.module.css'
export default function Home() {
  return (
    <main className={`${styles.mainContainer}`}>
      <div className="position-relative">
        <div className={`d-flex flex-row  ${styles.belowNav}`}>
          <div className={`d-flex flex-column ${styles.mainTagContainer}`}>
            <div className={`${styles.attrA}`}><h3>I am</h3></div>
            <div className={styles.nameTag}>
              <h1 className="d-flex flex-row flex-sm-column  flex-md-column flex-lg-column gap-1"><span className={styles.firstName}>Don</span>Benny</h1>
            </div>
            <div className={`ms-lg-3 mb-0 text-light ${styles.attrB}`}><h3>a Full Stack Developer.</h3></div>
            <div className={`ms-lg-3 mt-1 mt-lg-3 ${styles.quoteSide}`}>
              <div className={`ms-2 ${styles.quotes}`}>
                Transforming ideas into elegant solutions through code, I strive to craft innovative digital experiences that leave a lasting impact.
              </div>
            </div>
          </div>
          <div className={`${styles.myImage}`}>
            <Image src="/donmain_page.png" fill={true} alt="don_displayImage" />
          </div>
        </div>
      </div>
      <section className="text-center mt-5">
        <span className={`${styles.sectionHeadings}`}>About me</span>
        <div className={`text-white w-100 ${styles.aboutPara}`}>
          I am a highly skilled and motivated individual with a strong passion for learning and self-improvement. Throughout my professional and personal experiences, I have consistently demonstrated my ability to adapt to new situations and take on challenges with a positive attitude. I have the ability to work well both independently and as part of a team. I am excited to continue to grow and develop my skills in new environments and am confident that I have the drive and determination to succeed in any venture I undertake.
        </div>
      </section>
    </main>
  )
}
