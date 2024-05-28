import Animated from "../../component/animated/Animated";
import "./story.css";

const Story = ({ page }) => {
  return (
    <Animated className="story">
      <section>
        <div>
          {page.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </Animated>
  );
};

export default Story;
