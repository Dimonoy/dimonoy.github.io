const projects = [
  {
    imageUrl: "../public/images/portfolio-project.png",
    title: "My Portfolio 1",
    description: "Just a page for testing, I will remove it soon.",
    link: "http://localhost:8000/",
  },
  {
    imageUrl: "../public/images/portfolio-project.png",
    title: "My Portfolio 2",
    description: "Just a page for testing, I will remove it soon.",
    link: "http://localhost:8000/",
  },
  {
    imageUrl: "../public/images/portfolio-project.png",
    title: "My Portfolio 3",
    description: "Just a page for testing, I will remove it soon.",
    link: "http://localhost:8000/",
  },
  {
    imageUrl: "../public/images/portfolio-project.png",
    title: "My Portfolio 4",
    description: "Just a page for testing, I will remove it soon.",
    link: "http://localhost:8000/",
  },
];

// Labels: {imgUrl} {title} {description} {link} {index}
const htmlContent = `
  <div class="projects__slide">
    <div class="projects__slide__content">
      <img src="{imgUrl}" alt="{title}" />
      <div class="projects__slide__info">
        <div class="projects__slide__info__text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <a href="{link}" target="_blank">View Project</a>
      </div>
    </div>
  </div>
`;

/**
 * Sets project slides content.
 * @param {number} index - The index of the selected project.
 * @returns {number} - Correct index
 */
function setup(index) {
  index = index < 0 ? projects.length - 1 : index % projects.length;
  const prevProjectIndex = index === 0 ? projects.length - 1 : index - 1;
  const nextProjectIndex = index === projects.length - 1 ? 0 : index + 1;

  $(".projects__slide:nth-child(2)").replaceWith(
    htmlContent
      .replace("{imgUrl}", projects[index].imageUrl)
      .replaceAll("{title}", projects[index].title)
      .replace("{description}", projects[index].description)
      .replace("{link}", projects[index].link),
  );
  $(".projects__slide:first-child").replaceWith(
    htmlContent
      .replace("{imgUrl}", projects[prevProjectIndex].imageUrl)
      .replaceAll("{title}", projects[prevProjectIndex].title)
      .replace("{description}", projects[prevProjectIndex].description)
      .replace("{link}", projects[prevProjectIndex].link),
  );
  $(".projects__slide:last-child").replaceWith(
    htmlContent
      .replace("{imgUrl}", projects[nextProjectIndex].imageUrl)
      .replaceAll("{title}", projects[nextProjectIndex].title)
      .replace("{description}", projects[nextProjectIndex].description)
      .replace("{link}", projects[nextProjectIndex].link),
  );

  return index;
}

export { setup };
