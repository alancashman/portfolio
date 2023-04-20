import "./App.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainPage from "./Pages/MainPage.jsx";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
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
