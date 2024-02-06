import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Bacon Training</h1>
      <LikeButton />
      <LikeButton />
      <br />
      <Counter />
      <br />
      <ClickablePicture />

    </div>
  );
}

export default App;
