import "./App.css";
import Textarea from "./components/TaskForm/Textarea";
import TaskList from "./components/TaskList/TaskList";

function App() {
	return (
		<div className="container">
			<Textarea />
			<TaskList />
		</div>
	);
}

export default App;
