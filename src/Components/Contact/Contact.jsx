import './Contact.scss'
import githubIcon from '../../assets/icons/github.png'
import linkedInIcon from '../../assets/icons/linkedin.png'

export default function Contact() {
    return (
    <section className="contact">
        <div className="contact__name">
            <h1 className="contact__header">Alan V. Cashman, Esq.*</h1>
            <h6 className="contact__footnote">*Not really</h6>
        </div>
        <div className="contact__details">
            <a href="https://github.com/alancashman" className="contact__detail contact__detail--link"><img src={githubIcon} alt="github" className='contact__icon'/></a>
            <a href="https://www.linkedin.com/in/alan-cashman/" className="contact__detail contact__detail--link"><img src={linkedInIcon} alt="linkedin" className="contact__icon" /></a>
            <a href="mailto:alanvcashman@gmail.com" className="contact__detail contact__detail--email">alanvcashman@gmail.com</a>
        </div>
    </section>
        )
}