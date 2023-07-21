'use client'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <div>

            <div className={styles.MainFooter}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-3">
                        <a href="https://www.linkedin.com/in/donbenny/"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/donC20"><i className="bi bi-github"></i></a>
                        <a href="https://instagram.com/___d.o.n___?igshid=MzNlNGNkZWQ4Mg=="><i className="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/donbenny916?mibextid=ZbWKwL"><i className="bi bi-facebook"></i></a>
                        <a href="mailto:donbennyy@gmail.com"><i className="bi bi-envelope-fill"></i></a>
                        <a href="https://stackoverflow.com/users/20682176/hexated"><i className="bi bi-stack-overflow"></i></a>
                    </div>
                    <div className="d-flex flex-row">
                        <p>&copy;Copyright &bull; Don Benny &bull; 2023</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
