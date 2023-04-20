import "./Header.scss";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	return (
		<section className="header">
			<h1 className="header__heading">Alan V. Cashman</h1>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item" onClick={navigate("/")}>
						Home
					</li>
					<li className="nav__item" onClick={navigate("/projects")}>
						Projects
					</li>
					<li className="nav__item" onClick={navigate("/contact")}>
						Contact
					</li>
				</ul>
			</nav>
		</section>
	);
}
