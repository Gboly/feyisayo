import { useContext } from "react";
import "./fullscreen.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { GeneralContext } from "../../App";

const Fullscreen = ({ src, type }) => {
  const { setFullscreen } = useContext(GeneralContext);

  const handleClick = (e) => {
    e.target.id && setFullscreen({ src: "", type: "" });
  };

  return (
    <div className="fullscreen" id="fullscreen" onClick={handleClick}>
      <div
        className="cancel"
        onClick={() => setFullscreen({ src: "", type: "" })}
      >
        <CancelIcon style={{ color: "black", fontSize: "2.5rem" }} />
      </div>
      {type === "img" ? (
        <img src={src} className="pic fs" alt="" />
      ) : (
        <video src={src} className="vid fs" controls autoPlay></video>
      )}
    </div>
  );
};

export default Fullscreen;
