class project {
  constructor(name, desc, image, gist, path, imageNumber) {
    this.name = name;
    this.desc = desc;
    this.image = image;
    this.gist = gist;
    this.path = path;
    this.imageNumber = imageNumber;
  }
}
const project1 = new project(
  "authorization",
  "HTML,SCSS, NODE.js & EJS",
  "image1.png",
  "gist",
  "../assets/todo-back/"
);
const project2 = new project(
  "webshop",
  "HTML,SCSS,JQUERY",
  "image1.png",
  "gist",
  "../assets/webbshop/"
);
const project3 = new project(
  "todolist",
  "HTML,SCSS,NODE.js & EJS",
  "image1.PNG",
  "gist",
  "../assets/todoback/"
);
const project4 = new project(
  "todolist",
  "HTML,SCSS,JS & CSS",
  "image1.PNG",
  "gist",
  "../assets/first/"
);

const projectArray = [project1, project2, project3, project4];

$(function () {
    localStorage.clear();
  $.each(projectArray, (i, project) => {
    let projectBox = $("<div>")
      .addClass("project-box")
      .appendTo("#projects-list");

    let imageHandlerDiv = $("<div>")
      .addClass("image-handler-div")
      .on("click", () => {
        $(".content-container").addClass("content-container-fadeout");
        localStorage.setItem("specProject", JSON.stringify(project));
        setTimeout(() => {
          remover();
        }, 900);
      })
      .appendTo(projectBox);

    let imageProject = $("<img>")
      .attr("src", project.path + project.image)

      .appendTo(imageHandlerDiv);

    let titleProject = $("<h3>")
      .addClass("title-project")
      .html(project.name)
      .appendTo(imageHandlerDiv);

    let descBox = $("<div>").addClass("desc-box").appendTo(projectBox);
    $("<span>").html(project.desc).appendTo(descBox);
  });
});



function remover() {
  $("#content-container").empty();

  window.location.href = "specificProject.html";
}
