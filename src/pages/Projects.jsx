function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Responsive React portfolio website with modern UI, animations, and dark/light mode showcasing my projects and skills. Built with React, Tailwind CSS, and Framer Motion for smooth animations."
    },
  
    {
      title: "Foodies Website",
      desc: "A responsive restaurant landing page built with React.js and Tailwind CSS, featuring a menu, cart functionality, smooth scrolling navigation, and contact form."
    },
    {
      title: "Login Authentication System",
      desc: "Full-stack role-based authentication app built with Spring Boot, React (Vite), Tailwind CSS, and MySQL. Features JWT authentication, secure login/register, admin dashboard, user management, protected routes, and delete user functionality."
    },
    {
      title: "Student Management System",
      desc: "Student Management System with full CRUD functionality built using React, Spring Boot, and MySQL. Features include add, edit, delete, and view students with REST API integration."
    }

  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1>My Projects</h1>

        <div className="card-container flex flex-wrap">
          {projects.map((project, index) => (
            <div className="card flex flex-row" key={index}>
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