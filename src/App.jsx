import "./App.scss";
import { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainPage from "./Pages/MainPage.jsx";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
	// const [title, setTitle] = useState('Alan Cashman, Web Developer Extraordinaire')
	const title = 'Alan Cashman, Web Developer Extraordinaire'

	useEffect(() => {
		document.title = title
	}, [title])

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
