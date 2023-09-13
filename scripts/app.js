import { projects } from "../data/projects.js";

let projectsHTML = "";

projects.forEach((project, index) => {
  if (index % 2 === 0) {
    projectsHTML += `<li id="${project.id}">
    <h3 class="project-title">${project.title}</h3>
    <div class="project-content">
        <div class="project-screenshot">
        <a
            href="${project.githubRepo}"
            target="_blank"
            ><img
            src="${project.screenshot}"
            alt="Screenshot of ${project.title}"
        /></a>
        </div>
        <div class="project-description">
        ${project.description}
        <div class="github-repo">
            <a
            href="${project.githubRepo}"
            ><span
                >${project.githubRepo}</span
            ></a
            >
        </div>
        </div>
    </div>
  </li>`;
  } else {
    projectsHTML += `<li id="${project.id}">
    <h3 class="project-title">${project.title}</h3>
    <div class="project-content">
    <div class="project-description">
        ${project.description}
        <div class="github-repo">
            <a
            href="${project.githubRepo}"
            ><span
                >${project.githubRepo}</span
            ></a
            >
        </div>
        </div>
        <div class="project-screenshot">
        <a
            href="${project.githubRepo}"
            target="_blank"
            ><img
            src="${project.screenshot}"
            alt="Screenshot of ${project.title}"
        /></a>
        </div>
    </div>
  </li>`;
  }
});

document.querySelector(".projects").innerHTML = projectsHTML;
