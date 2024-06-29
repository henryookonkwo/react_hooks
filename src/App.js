import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    // setCount(count + 1);
    //Keeps into account previous value
    setCount((prevCount) => prevCount + 1);
  };
  const handleClickDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={handleClickIncrease}>increase by 1</button>
      <br />
      <button onClick={handleClickDecrease}>decrease by 1</button>
    </div>
  );
}

export default App;
