import CardBack from "./components/cardback";
import CardFront from "./components/cardfront";
import './App.css'


function App() {
  return (
    <div className="App">
        <header>
          <CardBack />
          <CardFront />
        </header>
    </div>
  );
}

export default App;
