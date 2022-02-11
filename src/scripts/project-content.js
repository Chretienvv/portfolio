const githubButton = document.querySelector("button")
const projectTitleElement = document.getElementById("project-title")
const projectRoleElement = document.getElementById("role")
const projectDescriptionElement = document.getElementById("project-description")
const projectResponsibilityElement = document.getElementById("responsibility")
const projectLearningsElement = document.getElementById("learnings")
const projectTechniquesElement = document.getElementById("techniques")
const projectCards = document.getElementsByClassName("project-card-small")

// TODO create a server for loading json files and other project data. 
let allProjectsFakeServer = {
    "SoPickMeUp": {
        "title": "SoPickMeUp",
        "role": "Frontend Developer",
        "responsibility": "I was responsible for the connection of the backend, built components and services and implemented designs. All this in Angular 8 in combination with bootstrap and REST APIs. For example, I made forms, the login function, and services in TypeScript. In this project I had short lines with the designer and back-ender and we switched gears quickly and efficiently. As a result, impactful design choices are made or not.",
        "description": "SoPickMeUp is a carpool web app that makes it possible for Sogetists to ride together to events and training. This makes the journey more fun, more efficient, and more environmentally conscious. In a team of developers and designers I acted as frontend developer and scrum master. This with CSR, security and AVG always in mind.",
        "learnings": "In the future I will implement testing earlier in the process. During this project there were time we wished it was there. Also, the accessibility of the application could be improved with for instance A11y guidelines.",
        "techniques": "Angular, Cascading Style Sheets (CSS), Front-end development, GIT, Bootstrap HTML, REST, TypeScript, Unit testing",
    },
    "Portfolio": {
        "title": "Portfolio",
        "role": "Frontend Developer",
        "responsibility": "Responsible for everything that you see. From design till the code and deployment strategy. My main focus was on the HTML, CSS and JavaScript, but my experience from design helped when making design choices. ",
        "description": "At first, I created the design in Sketch and then made an MVP. This mvp needed to have the basics in place and be developed as fast as possible. After that I cleaned my code and improved it. Before developing I knew it would be a static website and the deployment strategy that applies to that. ",
        "learnings": "I would have the same approach MVP approach but implements cleaner code earlier. This is only possible because it is a small project. In big projects this is way more important. Next time I would create the content earlier, because then it is easy to get a feel for the website. The portfolio is still in development with cool ideas. These are described in the readme.",
        "techniques": "HTML, CSS, JavaScript, GIT, AWS, accessibility, ",
    },
    "Costdashboard": {
        "title": "Costdashboard",
        "role": "Software/cloud enginieer",
        "responsibility": "Responsible for the development of the Aegon Costdashboard. Both the AWS side as the “frontend” side of the cost dashboard. Communicating with finance, implementing the business logic in the code, and setting up databases with AWS. I worked a lot with AWS lambda, DynamoDB, s3, glue, TypeScript and python. A lot of data was in the cost dashboard and that needed to be handled correctly. So, separation was very important, as was the logic flow.",
        "description": "The Cost dashboard is the tool for Product managers, Product owners and other financial responsibles within aegon. It shows the accurate cloud costs for their teams, value streams etc. Aegon will use this product in the future as a central place for all the AWS related costs with their own standards applied to it.",
        "learnings": "If I could develop it again, I would not use glue and implement more testing mechanics in it. Also, an easier deploy flow would be great. The business logic and meanings are hard to explain, but we tried to implement it. The cost dashboard was too modern for the Aegon finance department, which created confusing about how the costs were divided.",
        "techniques": "Python, TypeScript, AWS, Git, DynamoDB, Lambda, S3, Azure Devops",
    },
    "AgileRacetrack": {
        "title": "AgileRacetrack",
        "role": "Frontend developer/cloud enginieer",
        "responsibility": "Responsible for setting up the frontend in a short time span during the innovation sprint. Create generic and reusable components to quickly create a one pager with an input form was my responsibility. ",
        "description": "A website for Scrum masters and release train engineers to get an overview of retrospective scores. Made during the innovation sprint to create awareness for the issue at hand. Made with a bit of humour with Formule 1 pictures.",
        "learnings": "I wont do anything different next time. For the short time span we created an awesome one pager with a form included. If this is developed further, then of course accessibility would be playing a really big part",
        "techniques": "AWS, HTML, CSS, JavaScript",
    }
    , "Matroesjka": {
        "title": "Matroesjka",
        "role": "Frontend developer/ cloud engineer",
        "responsibility": "When creating Matroesjka I was responsible for the Frontend and how it interacted with the api. Showing the data in the frontend was my main focus. The Api was created in AWS and I helped with the CDK side of it. ",
        "description": "Matroesjka originated from an innovation sprint where I made the frontend and the connection with AWS. Matroesjka in short is an API. It gathers data from AWS accounts and has different endpoints which the user can query.  In a later stage it got picked up as a real feature for Aegon. Then there was no frontend. It only was the API. It had three functions Application lookup, Ip lookup and anomaly detection. ",
        "learnings": "	AWS api gateway does a “under the water” for you when developing an api. I needed to research why sometimes it worked before we did anything. This was fun, but not convenient. The transition from website to only the api was easy.  ",
        "techniques": "	AWS Api gateway, HTML, CSS, JavaScript, AWS, Git, Azure Devops",
    },
    "CodeProjects": {
        "title": "CodeProjects",
        "role": "Software engineer",
        "responsibility": "The small code projects are solutions for puzzles, cool stuff I just wanted to make or for instance the advent of code. It may not be the cleanest code, but sometimes I like to clean it and learn from my choices. ",
        "description": "Using the advent of code, code wars, other cool projects, or just basic ones to get a bit more knowledge on certain subjects. ",
        "learnings": "If I solve a puzzle, then I need to immediately refactor it to clean code. Now that I come back to a puzzle I really need to read through the problem and code again. This takes more time.",
        "techniques": "JavaScript, TypeScript, Python",
    },
    "InnoSportLab": {
        "title": "InnoSportLab",
        "role": "Frontend Developer",
        "responsibility": "I was responsible for the Frontend of the application. Because of my knowledge of Angular, I quickly saw the similarities in Ionic. For example, I have the connection with the backend by means of REST APIs, form fields and the login function built. I did this through AWS Cognito and Ionic. The project had to be built from scratch. This gave a lot of freedom, but also responsibilities.",
        "description": "For InnoSportLab de Tongelreep I worked on “The smart swimming sensor app”. This innovation project was set up with a team of Sogeti colleagues. The purpose of the application is to analyse swimmers' training and forward this data to the swimmer.",
        "learnings": "The project is still in development, but next time I would have loved to know more about the possibilities of hardware. For instance, how much data can the sensor hold while under water. This was a completely unknown part for me.",
        "techniques": "CSS, HTML, Ionic, JSON, TypeScript, Git",
    },
    "DeveloperPortal": {
        "title": "DeveloperPortal",
        "role": "Frontend Developer/ cloud engineer",
        "responsibility": "I was responsible for the design, and the frontend of the developer portal. Creating the connection with AWS was fun to do. Basically, the website was an API with a friendly URL. The process of making calls and showing the right HTML, CSS etc was one of my responsibilities.",
        "description": "The portal is meant for new developers at Aegon. This will bring them up to speed with certain Aegon mechanics and rules. The project originated from an innovation sprint but quickly gained traction and evolved into a project for CPM.",
        "learnings": "Next time I would create a better deployment flow. Currently it is tedious to deploy and apply new changes to the website. The implementation of how to use images was also not optimal. ",
        "techniques": "HTML, CSS, TypeScript, Python, Git, Azure DevOps",
    }
}



githubButton.addEventListener("click", () => window.open("https://github.com/Chretienvv"))

for (element of projectCards) {
    element.addEventListener("click", e => {
        let projectTitle = e.currentTarget.querySelector("h4").innerText.split(" ").slice(1).join("")
        setProjectDetails(allProjectsFakeServer[projectTitle])
    })
}

setProjectDetails(allProjectsFakeServer.SoPickMeUp)

function setProjectDetails(project) {
    projectTitleElement.innerText = project.title
    projectRoleElement.innerText = project.role
    projectDescriptionElement.innerText = project.description
    projectResponsibilityElement.innerText = project.responsibility
    projectLearningsElement.innerText = project.learnings
    projectTechniquesElement.innerText = project.techniques
}


