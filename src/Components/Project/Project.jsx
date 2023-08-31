import './Project.scss'
import { Link } from 'react-router-dom'

export default function Project({name, link, image, text, hyperlink, backendRepo}) {


    return (
        <article className="project">
            <h3 className="project__heading">{name}</h3>
            <a href={link} className="project__link"><img src={image} alt="" className="project__image" /></a>
            <p className="project__text">{text}</p>
            {hyperlink ? <p>Github repo available <Link to={hyperlink}>here</Link></p> : ''}
            {backendRepo ? <p>Backend repo available <Link to={backendRepo}>here</Link></p> : ''}
        </article>
    )
}