import "../assets/styles/Project.scss";
import PhoneCard from "./ui/PhoneCard";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <div className="zoom phone-wrapper">
              <PhoneCard>
                Hello
                <span className="hidden">uiverse</span>
              </PhoneCard>
            </div>
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>Filmate AI</h2>
          </a>
          <p>
            Developed movie finder app with semantic search and sentiment
            analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
          </p>
        </div>
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <div className="zoom phone-wrapper">
              <PhoneCard>
                Hello
                <span className="hidden">uiverse</span>
              </PhoneCard>
            </div>
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>Filmate AI</h2>
          </a>
          <p>
            Developed movie finder app with semantic search and sentiment
            analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
