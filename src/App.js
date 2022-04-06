import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/Canvas";
import Color from "./components/Color";

function App() {
	return (
		<div className="App  grid grid-rows-2 gap-0 h-screen w-screen">
			<Canvas />
		</div>
	);
}

export default App;
