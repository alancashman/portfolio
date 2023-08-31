import './Skills.scss'
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png'
import jsIcon from '../../assets/icons/js.png'
import reactIcon from '../../assets/icons/react.png'
import sassIcon from '../../assets/icons/sass.png'
import nodeJsIcon from '../../assets/icons/nodejs.png'
import mysqlIcon from '../../assets/icons/mysql.png'
import expressIcon from '../../assets/icons/express.png'
import gitIcon from '../../assets/icons/git.png'

import Skill from '../Skill/Skill';

// const skills = [
//   {name: 'HTML', icon: htmlIcon},
//   {name: 'CSS', icon: cssIcon},
//   {name: 'JavaScript', icon: jsIcon},
//   {name: 'React', icon: reactIcon},
//   {name: 'Sass', icon: sassIcon},
//   {name: 'Node.js', icon: nodeJsIcon},
//   {name: 'MySQL', icon: mysqlIcon},
//   {name: 'Express', icon: expressIcon},
//   {name: 'Git', icon: gitIcon}
// ]


export default function Skills() {
  return (
    <section className="skills">
      <h3 className="skills__heading">Skills</h3>
      <div className="skills__row">
        <Skill name='HTML' icon={htmlIcon}/>
        <Skill name='CSS' icon={cssIcon}/>
        <Skill name='JavaScript' icon={jsIcon}/>
      </div>
      <div className="skills__row">
        <Skill name="Sass" icon={sassIcon}/>
        <Skill name="React" icon={reactIcon}/>
        <Skill name="Node.js" icon={nodeJsIcon}/>
      </div>
      <div className="skills__row">
        <Skill name="MySQL" icon={mysqlIcon}/>
        <Skill name="Express" icon={expressIcon}/>
        <Skill name="Git" icon={gitIcon}/>
      </div>
    </section>
  )
}
