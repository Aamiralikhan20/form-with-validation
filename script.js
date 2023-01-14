const form = document.getElementById('form');
const name = document.getElementById('name');
const profession = document.getElementById('profession');
const age = document.getElementById('age');

form.addEventListener('submit', e => {
  e.preventDefault();

validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
   
};

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
   
};


const validateInputs = () => {
    const namevalue = name.value.trim();
    const professionvalue = profession.value.trim();
    const agevalue = age.value.trim();

 if(namevalue === '' ){
    setError(name, 'required fields are empty')
    
 }else{ setSuccess(name);

 }

 if(professionvalue === '' ){
    setError(profession, 'required fields are empty')
 }else{ setSuccess(profession);

 }

 if(agevalue === ''){
    setError(age, 'required fields are empty')
 }else{ setSuccess(age);

 }
};




