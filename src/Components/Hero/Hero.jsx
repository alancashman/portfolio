import './Hero.scss'
import avatarImg from '../../assets/images/avatar-img.jpg'

export default function Hero() {
  return (
    <main className="hero">
      <img src={avatarImg} alt="" className="hero__img" />
      <h1 className="hero__heading">Hi, I'm Alan!</h1>
      <h3 className="hero__subheading">
        I'm a web developer from Vancouver, BC
      </h3>
    </main>
  )
}
