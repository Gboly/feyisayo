import "./note.css";
import hands from "../../assets/hands.jpg";

const Note = () => {
  return (
    <main className="note">
      <img src={hands} alt="" />
      <div>
        <p>{`I believe we have come a long way and it is high time we made this official. Don't you think? `}</p>
      </div>
    </main>
  );
};

export default Note;
