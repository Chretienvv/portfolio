const nameElement = document.getElementById("name");
const submit = document.querySelector('button[type="submit"]')
const formElements = document.querySelectorAll(".form-elements")
const downloadSummaryCVButtons = document.querySelectorAll('.cv-summary-button')
const downloadExtendCVButtons = document.querySelectorAll(".cv-extended-button")
const projectButtons = document.querySelectorAll(".project-button")
const headings = document.querySelectorAll("h2")



let observer = new IntersectionObserver((elementEntry) =>{
	if(elementEntry[0].isIntersecting === true){
    elementEntry[0].target.classList.add("change-color")
  }
  else{
    elementEntry[0].target.classList.remove("change-color")
  }
}, { threshold: [0] });


downloadSummaryCVButtons.forEach(e => e.addEventListener("click",
  () => window.open('./assets/downloadable-files/summary_chretien.pdf'),
))

downloadExtendCVButtons.forEach(e => e.addEventListener("click",
  () => window.open('./assets/downloadable-files/chretien_van_veldhuizen_sogeti.pdf'),
))

formElements.forEach(e => e.addEventListener("keyup", () => {
  validateElement(e)
}))

headings.forEach(
  element => {
    observer.observe(element)}
)

submit.addEventListener("click", (e) => {
  e.preventDefault()
  if (validateForm()) {
    let emailValues = createEmailValues()
    let emailContent = createEmailContent(emailValues)
    sendEmail(emailContent)
  }
})

for(let button of projectButtons){
    button.addEventListener("click", (e)=>{
       location.href ="./components/project_page.html"
    })
}

function validateElement(element) {
  const errorMessageTag = element.nextElementSibling;
  if (element.validity.valid) {
    setSuccesFor(element, errorMessageTag)
    return true
  } else {
    setErrorFor(element, errorMessageTag)
    return false
  }
}

function validateForm() {
  let invalidElements = []
  let validElements = []
  for (let element of formElements) {
    if (validateElement(element)) {
      validElements.push(element)
    } else {
      invalidElements.push(element)
    }
  }
  if (invalidElements.length > 0) {
    return false
  } else {
    return true
  }
}

function setErrorFor(element, errorMessageTag) {
  element.className = 'form-elements error';
  errorMessageTag.style.visibility = "visible";
}

function setSuccesFor(element, errorMessageTag) {
  element.className = 'form-elements';
  errorMessageTag.style.visibility = "hidden";
}

function createEmailValues(){
  let emailValues = {
    name: "No name specified",
    subject: "No subject specified",
    description: "No description specified"
  }

  for( let element of formElements){
    emailValues[element.name] = element.value
  }

  return emailValues
}

function createEmailContent(emailValues){
  let emailBody = `
  Hey Chrétien,\n
  Message from the form made by: ${emailValues.name} \n
  The description:\n
  ${emailValues.description}
  `
  let emailContent = {
    subject: emailValues.subject,
    body: emailBody,
  }

  return emailContent
}

function sendEmail(emailContent) {
  window.open(`mailto:chretien1998@gmail.com?subject=${emailContent.subject}&body=${emailContent.body}`)
}

