import logo from "./logo.svg";
import "./App.css";
import Canvas from "./components/Canvas";
import Color from "./components/Color";

function App() {
	return (
		<div className="App justify-center grid grid-rows-2 gap-0 w-screen h-screen">
			<Canvas />
		</div>
	);
}

export default App;
