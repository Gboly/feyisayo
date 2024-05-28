import "./App.css";
import Feyi from "./pages/feyi/feyi";
import Fullscreen from "./component/fullscreen/Fullscreen";
import { createContext, useState } from "react";
import Love from "./pages/love/Love";
import Story from "./pages/story/Story";
import { page1, page2 } from "./utilities/content";
import Note from "./pages/note/Note";
import Question from "./pages/question/Question";
import Final from "./pages/final/Final";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pages = [
  {
    num: 1,
    comp: <Feyi />,
  },
  {
    num: 2,
    comp: <Love />,
  },
  {
    num: 3,
    comp: <Story page={page1} />,
  },
  {
    num: 4,
    comp: <Story page={page2} />,
  },
  {
    num: 5,
    comp: <Note />,
  },
  {
    num: 6,
    comp: <Question />,
  },
];

export const GeneralContext = createContext();
function App() {
  const [{ src, type }, setFullscreen] = useState({ src: "", type: "" });
  const [page, setPage] = useState(2);

  const next = () => setPage(page + 1);
  const back = () => setPage(page - 1);

  return (
    <GeneralContext.Provider value={{ setFullscreen }}>
      {pages.map(({ num, comp }) => page === num && comp)}
      {page !== 1 && (
        <div className="back" onClick={back}>
          <ArrowForwardIosIcon style={{ color: "black", fontSize: "2rem" }} />
        </div>
      )}
      {page !== pages.length && (
        <div className="next" onClick={next}>
          <ArrowForwardIosIcon style={{ color: "black", fontSize: "2rem" }} />
        </div>
      )}

      {src && <Fullscreen src={src} type={type} />}
    </GeneralContext.Provider>
  );
}

export default App;
