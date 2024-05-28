import "./question.css";
import question from "../../assets/question-.png";
import { useState } from "react";
import Final from "../final/Final";

const Question = () => {
  const [accepted, setAccepted] = useState(false);

  const handleClick = () => {
    setAccepted(true);
  };

  return (
    <>
      {accepted ? (
        <Final />
      ) : (
        <main className="question">
          <img src={question} alt="" />
          <div>
            <button disabled>No</button>
            <button onClick={handleClick}>Yes</button>
          </div>
        </main>
      )}
    </>
  );
};

export default Question;
