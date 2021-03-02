class project{
    constructor(name, desc, image, gist){
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.gist = gist;
    }
}
const project1 = new project("Todolist", "Mitt första projekt", "../todoJS.png","gist" )

const projectArray = [project1]

$(function(){
    $.each(projectArray, (i,project)=> {
        let projectBox = $("<div>")
        .addClass("project-box")
        .appendTo("#projects-list")
      
        let titleProject = $("<h3>")
        .attr("id","title-project")
        .html(project.name)
        let imageProject = $("<img>")
        .attr("src",project.image);
        projectBox.append(titleProject, imageProject)
    })

})
