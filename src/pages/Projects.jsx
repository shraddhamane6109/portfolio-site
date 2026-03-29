function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern responsive portfolio built using React."
    },
  
    {
      title: "Weather App",
      desc: "Real-time weather app using API integration."
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1>My Projects</h1>

        <div className="card-container">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
