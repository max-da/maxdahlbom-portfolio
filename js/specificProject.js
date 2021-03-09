$(function(){
    let project = getProduct();
    let contentContainer =  $(".content-container");

    let projectHeading = $("<h1>")
    .html(project.name)
    .appendTo(contentContainer)

    let projectImage = $("<img>")
    .attr("src", project.path + project.image)
    .appendTo(contentContainer)

    
})



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