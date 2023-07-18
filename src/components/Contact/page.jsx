'use client'
import styles from './contact.module.css'
const Contact = () => {
    return (
        <div>
            <section className={styles.sectionBg} data-scroll-index="7">
                <div className={`pt-100 pb-100 ${styles.overlay}`}>
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className={styles.contactInfo}>

                                    <h2 className={styles.contactTitle}>Have Any Questions?</h2>
                                    <p>Inquisitive minds understand that asking the right questions is the gateway to growth and transformation. Tony Robbins, a renowned motivational speaker, emphasizes the significance of the questions we pose. They shape the quality of our lives, guiding us towards meaningful insights and profound understanding.</p>
                                    <div className={styles.contactInfo}>
                                        <div className={`d-flex flex-row gap-2 align-items-center ${styles.infoLeft}`}>
                                            <i className={`bi bi-telephone-fill`}></i>
                                            <h4>+91 7306227380</h4>
                                        </div>
                                        <div className={`d-flex flex-row gap-2 align-items-center ${styles.infoLeft}`}>
                                            <i className={`bi bi-envelope-fill ${styles.infoLeft}`}></i>
                                            <h4>donbennyy@gmail.com</h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className={styles.contactForm}>
                                    <form id='contact-form' method='POST'>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" id="first-name" placeholder="What do i call you?" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" id="email" placeholder="whats your email?" required="required" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea rows="4" name="message" className="form-control" id="description" placeholder="Whats your query?" required="required"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button className={`${styles.btnBig} ${styles.btn} ${styles.btnBg}`}>
                                                    Connect <i className="fas fa-arrow-right"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact
