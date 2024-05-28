import "./story.css";

const Story = ({ page }) => {
  return (
    <main className="story">
      <section>
        <div>
          {page.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Story;
