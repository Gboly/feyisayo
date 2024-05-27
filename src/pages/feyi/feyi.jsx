import "./feyi.css";
import feyi from "../../assets/feyisayo.png";
import feyi7 from "../../assets/feyi7.jpeg";
import feyi6 from "../../assets/feyi6.jpeg";
import feyi8 from "../../assets/feyi8.mp4";
import feyi3 from "../../assets/feyi3.mp4";
import feyi5 from "../../assets/feyi5.jpeg";
import feyi4 from "../../assets/feyi4.mp4";
import feyi2 from "../../assets/feyi2.mp4";
import feyi1 from "../../assets/feyi1.jpeg";
import { useContext } from "react";
import { GeneralContext } from "../../App";

const Feyi = () => {
  return (
    <main className="feyi">
      <div className="first">
        <Image src={feyi1} />
      </div>
      <div className="top">
        <Video src={feyi8} />
        <Video src={feyi3} />
      </div>
      <div className="mid">
        <Image src={feyi7} />
        <img src={feyi} alt="" />
        <Image src={feyi6} />
      </div>
      <div className="bottom">
        <Video src={feyi2} />
        <Video src={feyi4} />
      </div>
      <div className="last">
        <Image src={feyi5} />
      </div>
    </main>
  );
};

const Image = ({ src }) => {
  const { setFullscreen } = useContext(GeneralContext);

  return (
    <img
      src={src}
      className="pic"
      onClick={() => setFullscreen({ src, type: "img" })}
    />
  );
};

const Video = ({ src }) => {
  const { setFullscreen } = useContext(GeneralContext);

  return (
    <video
      src={src}
      className="vid"
      onClick={() => setFullscreen({ src, type: "vid" })}
    ></video>
  );
};

export default Feyi;
