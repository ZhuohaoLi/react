import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useDocumentTitle(`${name} has clicked ${count} times!`);

  //this gets called every time the component is rendered
  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount
  return (
    <React.Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times!
      </div>
      <div>Counter:{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </React.Fragment>
  );
}

export default Counter;
