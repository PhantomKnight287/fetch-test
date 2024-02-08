import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/data.json")
      .then((d) => d.json())
      .then((d) => setMessage(d.message));
  }, []);

  return <>{message}</>;
}

export default App;
