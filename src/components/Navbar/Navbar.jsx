'use client'
import styles from './navbar.module.css'
const Navbar = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg p-4 ${styles.container} fixed-top`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse position-relative" id="navbarNavAltMarkup">
                        <div className={`navbar-nav w-100 ${styles.navbarNav}`}>
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Works</a>
                        </div>
                        <div className={`text-center text-white w-100 ${styles.centerText}`}>{"<"}Hello, there!{"/>"}</div>
                        <div className={`navbar-nav d-flex justify-content-end w-100 ${styles.navbarNav}`}>
                            <a className="nav-link" href="#aboutMe">About</a>
                            <a className="nav-link" href='#resume_download'>Resume</a>
                            <a className="nav-link" href='#certificationsHead'>Certifications</a>
                            <a className="nav-link" href='#educationHead'>Education</a>
                            <a className="nav-link" href='#contactHead'>Contact</a>
                            <a className="nav-link " target='_blank' href='https://github.com/donC20'><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
