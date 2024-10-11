import "./App.css";
import Board from "./Components/Board";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center font-bold text-indigo-600">
        Tic-Tac-Toe
      </h1>
      <h1 className="text-xl text-center font-bold">
        Strategize and Outsmart Your Opponent!
      </h1>
      <Board />
    </>
  );
}

export default App;
