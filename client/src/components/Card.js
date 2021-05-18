import { useState } from 'react'
import '../../styles/ProjectCard.css';

function ProjectCard({ heading, alt, src, repo, link, paragraph, name }) {
    const [classes, setClasses] = useState("projectContainer my-3 d-none")

    const handleToggle = () => {
        if (classes === "projectContainer my-3 d-none") {
            setClasses("projectContainer my-3")
        } else {
            setClasses("projectContainer my-3 d-none")
        }
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="row">
                <button
                    className="btn"
                    type="button"
                    onClick={handleToggle}
                >
                    <a href={"#" + name}>{name}</a>
                </button>
            </div>
            <div className={classes}>
                <h2 id={name} className="text-center">Project Name: {heading}</h2>
                <h4 className="text-center">
                    Github Repo: <a target="_blank" rel="noreferrer" href={repo}>{repo}</a>
                </h4>
                <h4 className="text-center">
                    Deployed Link: <a href={link} rel="noreferrer" target="_blank">{link}</a>
                </h4>
                <p className="my-3 text-center paragraphField">{paragraph}</p>
                <img src={src} className="projectCard mb-3" alt={alt} />
            </div>
        </div>
    )
}

export default ProjectCard;