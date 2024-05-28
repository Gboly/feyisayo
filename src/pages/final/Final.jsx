import "./final.css";
import loveYou from "../../assets/love-you.png";
import thread from "../../assets/thread-line.png";
import { motion } from "framer-motion";

const Final = () => {
  return (
    <motion.main
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      className="final"
    >
      <section>
        <img src={loveYou} alt="" />
        <img src={thread} alt="" />
        <div>
          <p>
            Words cannot express the joy I feel knowing that we are embarking on
            this beautiful journey together. From the moment our paths crossed,
            I knew there was something incredibly special about you. Now, as my
            girlfriend, you have filled my heart with happiness beyond measure.
          </p>
          <p>
            {`I promise to love you every single day, not just with words, but with actions that show you how much you mean to me. I vow to cherish every moment we share, to support you through life's ups and downs, and to always stand by your side.`}
          </p>
          <p>{`I am beyond grateful to have you in my life, and I look forward to all the adventures and beautiful moments we will share. My heart is yours, now and always.`}</p>
          <p>I love you.</p>
        </div>
      </section>
    </motion.main>
  );
};

export default Final;
