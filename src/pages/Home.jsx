import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      
      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm Shraddha</h1>
        <h2>Frontend React Developer</h2>

        <p>
          I build modern web applications using React.
        </p>

        <button onClick={() => navigate("/projects")}>
          View Projects
        </button>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/developer.webp" alt="Developer" />
      </motion.div>

    </section>
  );
}

export default Home;
