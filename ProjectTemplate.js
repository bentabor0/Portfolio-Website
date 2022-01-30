class ProjectTemplate extends HTMLElement {

    set project(project) {
        this.innerHTML = `
        <div class="projects-grid">
        <a
          class="project project-tile"
          rel="noopener noreferrer"
          target="_blank"
          href="${project.link}"
        >
          <img
            class="project-image"
            src="${project.src}"
            alt="project"
          />
          <p class="project-title">
            <span class="code">&lt;</span>
            ${project.name}
            <span class="code">&#47;&gt;</span>
          </p>
        </a>
        </div>`;
    }
}

customElements.define('project-template', ProjectTemplate);