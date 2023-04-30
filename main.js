const formSteps=document.querySelectorAll('.step');
const nextBtns=document.querySelectorAll('.next-btn');
const backBtns=document.querySelectorAll('.back-btn');
const confirmBtns=document.querySelector('.confirm-btn');
const bar=document.querySelectorAll(".bar")

const errormessage=document.querySelectorAll('.error-message')

let currentStep=0;

nextBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    ValidateForm(currentStep)
  })
})

backBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    changeStep(currentStep-1)
  })
})

confirmBtns.addEventListener('click',()=>{
  ValidateForm(currentStep)

  
  
})


function ValidateForm(step){
  let isValid=true;
 const inputs=formSteps[step].querySelectorAll('input[required]')

 inputs.forEach((input)=>{
  if(!input.value){
    isValid=false;
    input.classList.add('error');
    input.nextElementSibling.textContent='this field is required'
  }else{
    input.classList.remove('error');
    input.nextElementSibling.textContent="";
  }
 })
 if(isValid){
  changeStep(step+1);
 }

}

//changestep

function changeStep(step){
  if(step >= formSteps.length){
    submitForm();
    return;
  }
  formSteps[currentStep].classList.remove('active');
  formSteps[step].classList.add('active');
  bar[currentStep].classList.add('bgColor');
 bar[step].classList.add('bgColor');

    //updateProgressbar
  currentStep=step;

}

function submitForm(){
 summary()


 document.getElementById('multistep-form').reset();
currentStep=0;
// bar[currentStep].classList.remove('bgColor');
bar.forEach((barColor)=>{
  barColor.classList.remove('bgColor')
})

formSteps.forEach((step)=>{
  step.classList.remove('active')
})
formSteps[currentStep].classList.add('active');
}


// 
function summary(){
  const summary=document.querySelector('.summary')
  const confirmMsg=document.createElement('p')
  confirmMsg.setAttribute('class','confirm-msg')
  confirmMsg.innerText='sucessfully completed! \n now you can buy product from our site'
  summary.appendChild(confirmMsg)
  const closeSummary=document.createElement('i')
  closeSummary.setAttribute('class','close-summary')
  closeSummary.innerText='close';
  confirmMsg.appendChild(closeSummary)

  document.querySelector('.close-summary').onclick=()=>{
    confirmMsg.remove();
  }
  
}