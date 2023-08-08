export default function Projectlist(){
    const projects = [
        {
            name: "Project 1",
            description: "This is a project",
            link: ""
        },
    ]
    return (
        <section>
           <h2>Projects</h2> 
           <ul> 
            {
                projects.map((project, index) => {
                    <li key={index}>  
                    <a href={project.link}>
                        {project.name}
            }
        </section>
    )
    };