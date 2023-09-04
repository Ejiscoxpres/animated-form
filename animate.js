const switchers = [...document.querySelectorAll('.switcher')];

const password = document.getElementById('password');
const password2 = document.getElementById('password2 ');



switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'));
		this.parentElement.classList.add('is-active');
	

    if (passwordValue === ''){
        setError(password,'password is required');
    }else if(passwordValue.length <8){
        setError(password,'password must be at least 8 characters.');
    }else{
        setSucess(password);
    }
    
    if (password2Value=== ''){
        setError(password2, 'please confirm your password');
    }else if (password2Value !==  passwordValue){
        setError(password2,"password doesn't match");
    }else{
        setSucess(password2);
    }
     /*--popup--*/
    if(document.Formfill.Password.value !== document.Formfill.CPassword.value){
        popup.classList.add("open-slide")
         return false;
     }
});

});
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide");
};

