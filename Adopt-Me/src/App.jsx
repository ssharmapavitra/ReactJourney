import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
	return (
		<BrowserRouter>
			<h1>Adopt Me!</h1>
			<Routes>
				<Route path="/details/:id" element={<Details />} />
				<Route path="/" element={<SearchParams />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
