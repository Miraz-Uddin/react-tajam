var nam = document.getElementById('input_name');
var namError = document.getElementById('input_name_err');

var eMail = document.getElementById('input_email');
var eMailError = document.getElementById('input_email_err');

var subJect = document.getElementById('input_subject');
var subJectError = document.getElementById('input_subject_err');

function sub(){
    if(nam.value==''){
        namError.innerHTML='Please Enter Your Name';
        nam.style.border='1px solid #00e0d0';
        nam.focus();
        return false;
    }
    if(eMail.value==''){
        eMailError.innerHTML='Enter your Mail ID';
        eMail.style.border='1px solid #00e0d0';
        eMail.focus();
        return false;
    }
    if(subJect.value==''){
        subJectError.innerHTML='Add a Subject Please';
        subJect.style.border='1px solid #00e0d0';
        subJect.focus();
        return false;
    }
}
function err_valid(){
    if(nam.value!=''){
        namError.innerHTML='';
        nam.style.border='1px solid #e5e5e5';
    }
    if(eMail.value!=''){
        eMailError.innerHTML='';
        eMail.style.border='1px solid #e5e5e5';
    }
    if(subJect.value!=''){
        subJectError.innerHTML='';
        subJect.style.border='1px solid #e5e5e5';
        return false;
    }
}
// function countWords(str) {
//     var count = 0,
//     i,
//     foo = str.length;
    
//     for (i = 0; i <= foo;i++) {
//     if (str.charAt(i) == " ") {
//     count ++;
//     }
    
//     }
//     return console.log(count + 1);  
//     }
// document.write(countWords("I am a short sentence"));
input_name.addEventListener('blur', err_valid);
input_email.addEventListener('blur', err_valid);
input_subject.addEventListener('blur', err_valid);