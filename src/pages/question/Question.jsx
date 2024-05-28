import "./question.css";
import question from "../../assets/question-.png";
import { useContext, useState } from "react";
import Final from "../final/Final";
import Animated from "../../component/animated/Animated";
import { GeneralContext } from "../../App";

const Question = () => {
  const { setLast } = useContext(GeneralContext);
  const [accepted, setAccepted] = useState(false);

  const handleClick = () => {
    setLast(true);
    setAccepted(true);
  };

  return (
    <>
      {accepted ? (
        <Final />
      ) : (
        <Animated className="question">
          <img src={question} alt="" />
          <div>
            <button disabled>No</button>
            <button onClick={handleClick}>Yes</button>
          </div>
        </Animated>
      )}
    </>
  );
};

export default Question;
