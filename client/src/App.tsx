
interface Project {
  title: string
  description: string
}

function ProjectCard(props: Project) {
  return <div> 
    <h2>
      {props.title}
    </h2>
    <p>
      {props.description}
    </p>
  </div>
}

function App() {
  const projects = [
    { title: "Project 1", description: "This is my first project"},
    { title: "Project 2", description: "This is my second project"}
  ]
  return <div>
    {projects.map((project) => (
        <ProjectCard title={project.title} description={project.description} key={project.title} />
    ))}
</div>
}

export default App


