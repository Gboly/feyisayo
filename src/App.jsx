import "./App.css";
import Feyi from "./pages/feyi/feyi";
import Fullscreen from "./component/fullscreen/Fullscreen";
import { createContext, useState } from "react";

export const GeneralContext = createContext();
function App() {
  const [{ src, type }, setFullscreen] = useState({ src: "", type: "" });

  return (
    <GeneralContext.Provider value={{ setFullscreen }}>
      <Feyi />
      {src && <Fullscreen src={src} type={type} />}
    </GeneralContext.Provider>
  );
}

export default App;
