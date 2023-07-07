import './Skills.scss'
import avatarImg from '../../assets/images/avatar-img.jpg'
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png'
import jsIcon from '../../assets/icons/js.png'
import reactIcon from '../../assets/icons/react.png'
import sassIcon from '../../assets/icons/sass.png'
import nodeJsIcon from '../../assets/icons/nodejs.png'

import Skill from '../Skill/Skill';


export default function Skills() {
  return (
    <section className="skills">
      <h3 className="skills__heading">Skills</h3>
      <div className="skills__row">
      <Skill name={'HTML'} icon={htmlIcon}/>
      <Skill name={'CSS'} icon={cssIcon}/>
      <Skill name={'JavaScript'} icon={jsIcon}/>
      </div>
      <div className="skills__row">
      <Skill name={"Sass"} icon={sassIcon}/>
      <Skill name={"React"} icon={reactIcon}/>
      <Skill name={"Node.js"} icon={nodeJsIcon}/>
      </div>
      <div className="skills__row">
      <div className="skills__skill">
        <h3 className="skills__subheading">MySQL</h3>
        <img src={avatarImg} alt="" className="skills__icon" />
      </div>
      <div className="skills__skill">
        <h3 className="skills__subheading">Express</h3>
        <img src={avatarImg} alt="" className="skills__icon" />
      </div>
      <div className="skills__skill">
        <h3 className="skills__subheading">Git</h3>
        <img src={avatarImg} alt="" className="skills__icon" />
      </div>
      </div>
    </section>
  )
}
