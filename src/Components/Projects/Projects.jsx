import './Projects.scss'
import avatarImg from '../../assets/images/avatar-img.jpg'
import bandSiteImg from '../../assets/images/bandsite.png'
import brainFlixImg from '../../assets/images/brainflix.png'
import inStockImg from '../../assets/images/instock.png'
import attaYouImg from '../../assets/images/attayou.png'
import Project from '../Project/Project'

export default function Projects() {
    const attaYouText = "Attayou is a modern, elegant, full-stack habit tracker application that allows users to input custom behaviors and track their success rates over time as they attempt to instill new habits or abstain from pre-existing ones.  Devised, designed, and built as a capstone project for graduation from BrainStation's web development bootcamp.  Backend repo available at https://github.com/alancashman/attayou-server.  Tech stack: React, Express, JSON"
    const inStockText = 'InStock is a full-stack and fully responsive warehouse and inventory tracker with full CRUD functionality.  Built collaboratively with a team of 5 developers.  Backend repo available at https://github.com/alancashman/instock-api.  Tech stack: React, Express, MySQL'
    const brainFlixText = "BrainFlix is a full-stack, fully responsive YouTube clone, built during the course of BrainStation's intensive web development bootcamp.  Backend repo available at https://github.com/alancashman/alan-cashman-brainflix-api.  Tech stack: React, Express, JSON"
    const bandSiteText = "BandSite is a fully responsive fanpage for a mock band, built during BrainStation's web development bootcamp.  Tech stack: HTML, CSS, vanilla JS"
    return (
        <section className="projects">
            <h1 className="projects__heading">Projects</h1>
            <Project name={'Attayou'} link={'https://github.com/alancashman/attayou-client'} image={attaYouImg} text={attaYouText}></Project>
            <Project name={'InStock'} link={'https://github.com/MariaVan8/instock-client'} image={inStockImg} text={inStockText}/>
            <Project name={'BrainFlix'} link={'https://github.com/alancashman/alan-cashman-brainflix'} image={brainFlixImg} text={brainFlixText}/>
            <Project name={'BandSite'} link={'https://github.com/alancashman/alan-cashman-bandsite'} image={bandSiteImg} text={bandSiteText}/>
        </section>
    )
}