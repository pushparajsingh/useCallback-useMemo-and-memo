import logo from "./logo.svg";
import "./App.css";
import { useCallback, useMemo, useState } from "react";
import Todo from "./Todo";

function App() {
  const [state, setState] = useState(["New Todo", "New Todo", "New Todo"]);
  const [data, setData] = useState(0);
  const AddTodo = useCallback(() => {
    setState((x) => [...x, "New Todo"]); //this bock of code make and execute when it is demand
  }, [state]); //on the bases of condition

  const Increment = useCallback(() => {
    setData((x) => x + 1); //this bock of code make and execute when it is demand
  }, [data]); //on the bases of condition

  const Decrement = useCallback(() => {
    setData((x) => x - 1); //this bock of code make and execute when it is demand
  }, [data]); //on the bases of condition

  const multipleValue = useMemo(() => {
    return data * 10; //present here. but, execute when it is demand
  }, [data]); //on the bases of condition

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
          <Todo item={state} />{" "}
          {/* it will render when any props will be change */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
