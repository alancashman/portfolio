import './Project.scss'

export default function Project({name, link, image, text}) {


    return (
        <article className="project">
            <h3 className="project__heading">{name}</h3>
            <a href={link} className="project__link"><img src={image} alt="" className="project__image" /></a>
            <p className="project__text">{text}</p>
        </article>
    )
}