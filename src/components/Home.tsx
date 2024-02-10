import { useState } from "react";
import { Footer } from "../common components/Footer";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const handleCounterUp = () => setCounter((prevCounter) => prevCounter + 1);
  const handleCounterDown = () => setCounter((prevCounter) => prevCounter - 1);
  const handleReset = () => setCounter(0);
  return (
    <div>
      <h1>Dżem dobry</h1>
      <h2>Counter shows: {counter}</h2>
      <button onClick={handleCounterUp}>Up</button>
      <button onClick={handleCounterDown}>Down</button>
      <button onClick={handleReset}>Reset</button>
      <Footer />
    </div>
  );
};
export default Home;
