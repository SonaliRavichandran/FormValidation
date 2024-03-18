const form=document.getElementById("form")
const username=document.getElementById("username")
const emailid=document.getElementById("emailid")
const password1=document.getElementById("password1")
const password2=document.getElementById("password2")


function checkRequired(inputs){
    inputs.forEach(input=>{
        if(input.value.trim()===""){
            //Error
            errorInput(input,`${getName(input)} is required`)
        }
        else{
            //success
            successInput(input)
        }
    })
}


function getName(input){
   // return input.id
  return input.getAttribute("data-name")  

}

function errorInput(input,message){
    const formGroup=input.parentElement;
    formGroup.className="form-group error"
    const p=formGroup.querySelector("p")
    p.innerHTML=message
}



function successInput(input){
    const formGroup=input.parentElement;
    formGroup.className="form-group success"
    const p=formGroup.querySelector("p")
    p.innerHTML=""
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,emailid,password1,password2])
})