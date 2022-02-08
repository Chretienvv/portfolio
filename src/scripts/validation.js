const nameElement = document.getElementById("name");
const submit = document.querySelector('button[type="submit"]')
const email = document.querySelector('input[name="email"]')
const formElements = document.querySelectorAll(".form-elements")

formElements.forEach(e => e.addEventListener("keyup", () => validateElement(e)))

submit.addEventListener("click", (e) => {
  e.preventDefault()
  if(validateForm()){
    sendEmail()
  }
})

function validateElement(element) {
  const errorMessageTag = element.nextElementSibling;
  if (element.validity.valid) {
    setSuccesFor(element,  errorMessageTag)
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

function sendEmail(){
  console.log("fakeSend met ses")
}