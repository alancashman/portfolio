import './About.scss'
import avatarImg from '../../assets/images/avatar-img.jpg'
import ubcImg from '../../assets/images/ubc.jpg'
import codeImg from '../../assets/images/code.jpg'
import bsImg from '../../assets/images/brainstation.jpg'

export default function About() {
  return (
    <>
      <section className="about">
        <h3 className="about__heading">About Me</h3>
        <div className="about__row">
        <p className="about__text about__text--left">
          I have two great passions in my career: psychology and programming.
          I received a Bachelor's of Arts from UBC in the former back in 2018 and worked
          for a while in a variety of fields before finally taking it upon
          myself to learn everything I could about the latter.
        </p>
        <img src={ubcImg} alt="" className="about__img" />
        </div>
        <div className="about__row">
        <p className="about__text about__text--right">
          Any time I've been in a coffee shop and seen people with code editors
          open my eye has always been drawn to the screen; turns out that all
          that colorful script is not the purview of a wizard (as was my guess),
          but a real, practical skill that, through a lot of hard work and
          dedication, anyone can learn!
        </p>
        <img src={codeImg} alt="" className="about__img about__img--left" />

        </div>
        <div className="about__row">
        <p className="about__text about__text--left">
          After spending a year treating self-study as my fulltime job, I got
          the opportunity to join BrainStation for their intensive 12-week web
          development bootcamp.  A few months later I was delighted to be asked to come
          back as a teaching assistant for a subsequent cohort, helping a new
          batch of hard-working individuals attempt to realize their dreams. Now
          I'm finally ready for my first official web development role!
        </p>
        <img src={bsImg} alt="" className="about__img" />
        </div>
      </section>
    </>
  )
}
