const projectButtons = document.getElementsByClassName("project-card-button")

for(let button of projectButtons){
    button.addEventListener("click", (e)=>{
       location.href ="./components/project_page.html"
    })
}





