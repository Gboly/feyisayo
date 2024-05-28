import Animated from "../../component/animated/Animated";
import { loveCards } from "../../utilities/content";
import "./love.css";
import { useState } from "react";

const Love = () => {
  return (
    <Animated className="love">
      <div>
        <h2>What do i love about you?</h2>
        <h5>
          Each of the beautiful cards made with love below contains unique
          things i love about feyisayomi. To reveal the content of any card, a
          single tap flips the card and voila, you have it.
        </h5>
        <section className="cards-container">
          {loveCards.map(({ animation, content }) => (
            <Card key={content} {...{ animation, content }} />
          ))}
        </section>
      </div>
    </Animated>
  );
};

const Card = ({ animation, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      {isFlipped ? (
        <div className="card" onClick={() => setIsFlipped(false)}>
          <p>{content}</p>
        </div>
      ) : (
        <div className="card" onClick={() => setIsFlipped(true)}>
          <img src={animation} alt="" />
        </div>
      )}
    </>
  );
};

export default Love;
