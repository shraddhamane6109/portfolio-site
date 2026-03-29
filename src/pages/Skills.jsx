import { motion } from "framer-motion";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1>My Skills</h1>

        <div className="card-container">
          {skills.map((skill, index) => (
            <motion.div
              className="card"
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
