const myForm = document.querySelector('.myForm');


myForm.addEventListener('submit', (e) => {

    if(!myForm[0].validity.valid){

        myForm[0].style.border = '0.2rem solid #ff2965';
 
        if(!myForm[0].nextElementSibling.classList.contains('error')){

            let spanError =  document.createElement('span');
            spanError.classList.add('error');
            spanError.innerText = `Oops! That doesn't look like an email address`; 
            myForm[0].after(spanError); 

        }

    }

    else{

        myForm[0].style.border = '0.2rem solid #3ee9e5';

        if(myForm[0].nextElementSibling.classList.contains('error')){

            myForm[0].nextElementSibling.remove();  

        }

    }

    e.preventDefault();

});
