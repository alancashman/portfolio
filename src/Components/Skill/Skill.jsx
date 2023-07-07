import './Skill.scss'

export default function Skill({name, icon}) {
    return (
        <div className="skill">
        <h3 className="skill__heading">{name}</h3>
        <img src={icon} alt="" className="skill__icon" />
      </div>
    )
}