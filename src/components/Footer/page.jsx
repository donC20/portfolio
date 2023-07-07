'use client'
import styles from './footer.module.css'
import 'bootstrap/dist/js/bootstrap.min.js';

const Footer = () => {
    return (
        <div>

            <div className={styles.MainFooter}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row gap-3">
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        <a href=""><i className="bi bi-github"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-envelope-fill"></i></a>
                        <a href=""><i className="bi bi-stack-overflow"></i></a>
                    </div>
                    <div className="d-flex flex-row">
                        <p>&copy; Don Benny &bull; 2023</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
