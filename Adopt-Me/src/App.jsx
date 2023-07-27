import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
		},
	},
});

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<header>
					<Link to="/">Adopt Me!</Link>
				</header>
				<Routes>
					<Route path="/details/:id" element={<Details />} />
					<Route path="/" element={<SearchParams />} />
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
