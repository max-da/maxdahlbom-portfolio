$(function(){
    let project = getProduct();
    render(project);

  

    
})
let x = 1;
function render(project){
    document.title = project.name;
    let contentContainer =  $(".spec-content-container");

    let projectHeading = $("<h1>")
    .html(project.name)
    .appendTo(contentContainer)

    let imageContainer = $("<div>")
    .addClass("image-container")
    .appendTo(contentContainer)


    let projectImage = $("<img>")
    .addClass("image")
    .attr("src", project.path + project.image)
    .appendTo(imageContainer)

    let textContainer = $("<div>")
    .addClass("text-container")
    .appendTo(contentContainer);

    let gitDateContainer = $("<div>")
    .addClass("git-date-container")
    .appendTo(textContainer);
    $("<a>")
    .attr("href", project.gitlink)
    .attr("target", "_blank")
    .attr("rel","noopener noreferrer")
    .addClass("fab fa-git")
    .appendTo(gitDateContainer);
    $("<span>")
    .html(project.date)
    .appendTo(gitDateContainer);



    $("<span>")
    .addClass("text-desc")
    .html(project.desc)
    .appendTo(textContainer);
    
    if (project.image2 != "nopic"){
        projectImage.addClass("an1");
        let  timer = setInterval(swap,5000)
    }
    function swap(){
   
        if (x == 1){
            projectImage.attr("src", project.path + project.image2)
        
            projectImage.addClass("an2")
            projectImage.removeClass("an1")
            return x = 2;
        }
        if (x == 2){
            projectImage.attr("src", project.path + project.image3)
            projectImage.removeClass("an2")
            projectImage.addClass("an3")
       
            return x = 3;
        }
        if (x == 3){
            projectImage.attr("src", project.path + project.image)
            projectImage.removeClass("an3")

            projectImage.addClass("an1")
            return x = 1;
        }
    }
 
    
   
    
}


function getProduct(){
    try{
        let specificProject = JSON.parse(localStorage.specProject);
        document.title = specificProject.name;
        return specificProject
     }
     catch(err){
       
         window.location.href = "../index.html"
     }

}


