import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [text, setText] = useState(false);

  const handleChangeText = () => {
    setText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!text && <Output>It is good to see you!</Output>}
      {text && <Output>Changed!</Output>}
      <button onClick={handleChangeText}>Change Text!</button>
    </div>
  );
};

export default Greeting;
