import './About.scss'

export default function About() {
  return (
    <>
      <section className="about">
        <h3 className="about__heading">About Me</h3>
        <p className="about__text about__text--left">
          I've got two great passions in my career: psychology and programming.
          I got a Bachelor's of Arts from UBC in the former in 2018 and worked
          for a while in a variety of fields before finally taking it upon
          myself to learn everything I could about the latter.
        </p>
        <p className="about__text about__text--right">
          Any time I've been in a coffee shop and seen people with code editors
          open my eye has always been drawn to the screen; turns out that all
          that colorful script is not the purview of a wizard (as was my guess),
          but a real, practical skill that, through a lot of hard work and
          dedication, anyone can learn!
        </p>
        <p className="about__text about__text--left">
          After spending a year treating self-study as my fulltime job, I got
          the opportunity to join BrainStation for their intensive 12-week web
          development bootcamp I was delighted to get the opportunity to come
          back as a teaching assistant for a subsequent cohort, helping a new
          batch of hard-working individuals attempt to realize their dreams. Now
          I'm finally ready for my first official web development role!
        </p>
      </section>
    </>
  )
}
