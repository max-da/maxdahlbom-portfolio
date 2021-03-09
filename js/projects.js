class project{
    constructor(name, desc, image, gist, path,imageNumber){
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.gist = gist;
        this.path = path;
        this.imageNumber =  imageNumber;
    }
}
const project1 = new project("Todolist", "Mitt första projekt", "image1.png","gist", "../assets/webbshop/")
const project2 = new project("Todolist", "Mitt första projekt", "image1.png","gist", "../assets/webbshop/")

const projectArray = [project1,project2]

$(function(){
    $.each(projectArray, (i,project)=> {
        let projectBox = $("<div>")
        .addClass("project-box")
        .appendTo("#projects-list");
      
      
   

        let imageHandlerDiv = $("<div>")
        .addClass("image-handler-div")
        .appendTo(projectBox);
        
        let imageProject = $("<img>")
        .attr("src", project.path + project.image)
        .appendTo(imageHandlerDiv);

        //projectBox.append(titleProject, imageHandlerDiv)
        
        let overlay = $("<div>")
        .addClass("overlay")
        .appendTo(imageHandlerDiv); 

     let titleProject = $("<h3>")
        .attr("id","title-project")
        .html(project.name)
        .appendTo(imageHandlerDiv); 

        let desc = $("<span>")
        .html(project.desc)
        .appendTo(projectBox);
    
        
    })

})

