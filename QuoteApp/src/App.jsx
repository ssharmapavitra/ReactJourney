import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Counter from "./counter";
function App() {
	const [quote, setQuote] = useState("");
	return (
		<>
			<h1>Hello</h1>
			<Counter />
			<h1>{quote}</h1>
			<button
				onClick={() =>
					axios
						.get("https://api.kanye.rest")
						.then((result) => setQuote(result.data.quote))
				}
			>
				Get A Quote
			</button>
		</>
	);
}

export default App;
