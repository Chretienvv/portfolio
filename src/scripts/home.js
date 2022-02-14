
const projectButtons = document.querySelectorAll(".project-button")

for(let button of projectButtons){
    button.addEventListener("click", (e)=>{
       location.href ="./components/project_page.html"
    })
}





