import "./App.css";

function RandomImage() {
	return <img src="https://picsum.photos/600/300?grayscale" alt="Random" />;
}

function App() {
	return (
		<>
			<RandomImage />
			<h1>Hello World</h1>
		</>
	);
}

export default App;
