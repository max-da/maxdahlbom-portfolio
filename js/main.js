$(function(){
    startRender()
})







function startRender(){
    let backgroundBoth = $("<div>")
    //.addClass("background")
    .attr("id","background-both")
    .appendTo("body");

    let backgroundDivOne = $("<div>")
    .addClass("background")
    .attr("id","background-one")
    .appendTo("#background-both");

    let backgroundDivTwo = $("<div>")
    .addClass("background")
    .attr("id","background-two")
    .appendTo("#background-both");

    let startContentDiv = $("<div>")
    .attr("id","start-content-div")

    .appendTo("body");

    let linkNav = $("<div>")
    .attr("id","link-nav")
    .appendTo("#start-content-div");
    

    let projectLinkDiv = $("<div>")
     .attr("id", "project-link-div")
     .addClass("link-box")
     .appendTo("#link-nav");

    let cvLinkDiv = $("<div>")
    .addClass("link-box")
    .attr("id", "cv-link-div")
    .appendTo("#link-nav");

    let projectLink = $("<h2>")
    .attr("id", "project-link")
    .addClass("nav-links")
    .addClass("project-link-transition")
    .html("projects")
    .on("click",()=>{
        ($("#background-one"))
        .addClass("background-one-transition-active");
        setTimeout(() => {
            ($("#project-link"))
            .addClass("project-link-animation");
            ($("#cv-link"))
            .addClass("cv-link-animation"); 
            
            
        }, 500);
        setTimeout(() => {
          remover("/html/projects.html")
        }, 1100);
      
    })
    .appendTo("#project-link-div");

    let cvLink = $("<h2>")
    .attr("id", "cv-link")
    .addClass("nav-links")
    .html("about")
    .on("click",()=>{
        ($("#background-one"))
        .addClass("background-one-transition-active");
        setTimeout(() => {
            ($("#project-link"))
            .addClass("project-link-animation");
            ($("#cv-link"))
            .addClass("cv-link-animation"); 
            
            
        }, 500);
        setTimeout(() => {
          remover("/html/about.html")
        }, 1100);
      
    })
    .appendTo("#cv-link-div");

}


function remover(url){
    ($("#start-content-div")).empty();
    ($("#background-one")).remove();
    window.location.href=url
}