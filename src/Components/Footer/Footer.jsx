import './Footer.scss'
import githubIcon from '../../assets/icons/github.png'
import linkedInIcon from '../../assets/icons/linkedin.png'

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <p className="footer__text">&copy; Alan V. Cashman 2023</p>
            <div className="footer__contact">
                <div className="footer__socials">
                <a href="https://github.com/alancashman" className="footer__text footer__text--link"><img src={githubIcon} alt="github" className='footer__icon'/></a>
                <a href="https://www.linkedin.com/in/alan-cashman/" className="footer__text footer__text--link"><img src={linkedInIcon} alt="linkedin" className="footer__icon" /></a>
                </div>
                <a href="mailto:alanvcashman@gmail.com" className="footer__text footer__text--link">alanvcashman@gmail.com</a>
            </div>
        </footer>
        </>
    )
}