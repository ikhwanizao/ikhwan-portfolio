import { projects } from "../data/projects.js";

let projectsHTML = "";

projects.forEach((project) => {
    projectsHTML += 
    `<li id="${project.id}">
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
  </li>`;
});

document.querySelector(".projects").innerHTML = projectsHTML;
