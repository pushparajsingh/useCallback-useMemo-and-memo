import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useState } from "react";
import Todo from "./Todo";

function App() {
  const [state, setState] = useState(["New Todo", "New Todo", "New Todo"]);
  const [data, setData] = useState(0);
  const AddTodo = useCallback(() => {
    setState((x) => [...x, "New Todo"]);
  }, [state]);

  const Increment = useCallback(() => {
    setData((x) => x + 1);
  }, [data]);

  const Decrement = useCallback(() => {
    setData((x) => x - 1);
  }, [data]);

  const multipleValue = useMemo(() => {
    return data * 10;
  }, [data]);
  return (
    <div className="App">
      <h1>Count: {data}</h1>
      <h1>multiplication: {multipleValue}</h1>
      <button onClick={AddTodo}>Add Todo</button>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <Todo item={state} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
