class project {
  constructor(name, desc, image,image2, image3, tools, path, gitlink,date) {
    this.name = name;
    this.desc = desc;
    this.image = image;
    this.image2 = image2;
    this.image3 = image3;
    this.tools = tools;
    this.path = path;
    this.gitlink = gitlink;
    this.date = date;
   
  }
}
const project1 = new project(
  "authorization",
  "Det här är vår andra uppgift i backend-kursen, och ett av mina roligaste projekt hitintills. Uppgiften var att ta vårt tidigare projekt i kursen, och implementera authentication. Jag omstrukturerade projeketet efter MVC arkitektur, och la till inloggning och registrering av användare, som använder bcrypt för att hasha data innan användaren sparas i databasen. Jag använder också JWT för att spara användarens inloggning under en specifierad tid, för att slippa logga in på nytt varje gång man byter sida. Det går också att återställa sitt lösenord, vilket sköts med nodemailer. Här hade jag lite tid över så jag passade på att göra om stylingen från grunden, vilket gjorde mig betydligt nöjdare med resultatet.",
  "image1.png",
  "image2.png",
  "image3.png",
  "HTML,SCSS, NODE.js & EJS",
  "../assets/todo-back/",
  "https://github.com/max-da/backendCourseTodoApp",
  "4th march 2021"
);
const project3 = new project(
  "webshop",
  "Det här är ett grupprojekt från vår Javascriptkurs. Vi arbetade i team om tre, och jag hade det huvudsakliga ansvaret för JS-delen. Det var väldigt lärorikt att arbeta i grupp, särskilt med tanke på att vi då inte ännu lärt oss agila arbetssätt. Så det sätter verkligen i perspektiv hur användbart det är, då det stundvis var svårt att strukturera vårt arbeta utan något konkret tillvägagångssätt.  ",
  "image1.png",
  "image2.png",
  "image3.png",
  "HTML,SCSS,JQUERY",
  "../assets/webbshop/",
  "https://github.com/feliciatranberg/GruppArbeteWebbshop",
  "23th dec 2020"

);
const project2 = new project(
  "todolist",
  "Det här är den första uppgiften från vår backend-kurs. Jag skapade en webserver med express, sparar data i mongoDB med Mongoose, och sköter eventuell front-end kod med EJS. Jag tycker verkligen om backend-kursen, jag har fått en helt annan inblick i hur en hemsida fungerar. Tyvärr hann jag inte riktigt lägga lika mycket krut på stylingen som jag hade velat, men i slutändan var det inte det som var uppgiftens fokus. ",
  "image1.PNG",
  "nopic",
  "nopic",
  "HTML,SCSS,NODE.js & EJS",
  "../assets/todoback/",
  "https://github.com/max-da/Todoapp-backend",
  "8th feb 2021"

);
const project4 = new project(
  "todolist",
  "När jag ser tillbaka på dem här äldre projeketen blir jag både irriterad för att jag inte tycker att dem riktigt håller måttet, men också nöjd över att dem reflekterar att jag hela tiden utvecklas.Det här är mitt första projekt från vår Javascript-kurs, en enkel todo-list. Syftet med uppgiften var huvudsakligen att lära sig hur js-klasser fungerar, hur man renderar dem dynamiskt, och hur man hanterar data i localstorage.",
  "image1.PNG",
  "nopic",
  "nopic",
  "HTML,JS & CSS",
  "../assets/first/",
  "https://github.com/max-da/todolistJsHomework",
  "18th nov 2020"
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
    $("<span>").html(project.tools).appendTo(descBox);
  });
});



function remover() {
  $("#content-container").empty();

  window.location.href = "specificProject.html";
}
