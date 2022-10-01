
// Flags to keep track of Status of individual fields
let firstNameStatus = false;
let lastNameStatus = false;
let emailStatus = false;
let passwordStatus = false;
let confirmPasswordStatus = false;
let tNCStatus = false;


// Function to validate First Name
let firstNameFunction = () => {
   let firstName =  document.getElementById("firstNameId").value;
  

   //First Name:  At least 3 characters

   if(firstName.length>=3)
   {
    document.getElementById('firstName-valid').style.display= "block";
    document.getElementById('firstName-invalid').style.display= "none";
    firstNameStatus = true;
   }
   else
   {
    document.getElementById('firstName-valid').style.display= "none";
    document.getElementById('firstName-invalid').style.display= "block";
    firstNameStatus = false;
   }

}
// Function to validate Last Name

let lastNameFunction = () => {
    let lastName =  document.getElementById("lastNameId").value;
    
 
//     Last Name: At least 3 characters

    if(lastName.length>=3)
    {
     document.getElementById('lastName-valid').style.display= "block";
     document.getElementById('lastName-invalid').style.display= "none";
     lastNameStatus = true;
     
    }
    else
    {
     document.getElementById('lastName-valid').style.display= "none";
     document.getElementById('lastName-invalid').style.display= "block";
     lastNameStatus = false;
    }
 
 }

//Function to validate Email
 let emailIdFunction = () => {
     emailStatus = false;


    let email =  document.getElementById("emailId").value;
    

    if(email!="") //Email entered (not left blank)
    {
        if(email.includes('@')&& email.includes('.')) //Should contain ‘@’ and ‘.’
        {
            let lastIndexOfDot = email.lastIndexOf('.');
            let tempString = email.slice(lastIndexOfDot)
           
            if(tempString.length>=3)  //After last ., there should be at least be 2 characters
            {
                if(email.charAt(0)!='@') //First character cannot be @
                {
                    emailStatus=true;
                }
            }
            
        }
    }

 
    if(emailStatus)
    {
     document.getElementById('email-valid').style.display= "block";
     document.getElementById('email-invalid').style.display= "none";
     emailStatus=true;
    }
    else
    {
     document.getElementById('email-valid').style.display= "none";
     document.getElementById('email-invalid').style.display= "block";
     emailStatus=false;
    }
 }


//Function to validate Password
 let passwordFunction = () => {
    let password =  document.getElementById("password-id").value;
   

     passwordStatus = false;

    if(password.length >= 8) //At least 8 characters
    {
        if(password.includes('$') || password.includes('#') || password.includes('@')) //At least one special character used from [$, #, @]
        {
            if(password.includes('0')||password.includes('1')||password.includes('2')||password.includes('3')||password.includes('4')) //At least one number used from [0, 1, 2, 3, 4]
            {
                passwordStatus = true;
            }
        }
    }

    
    if(passwordStatus)
    {
     document.getElementById('password-valid').style.display= "block";
     document.getElementById('password-invalid').style.display= "none";
     passwordStatus = true;
    }
    else
    {
     document.getElementById('password-valid').style.display= "none";
     document.getElementById('password-invalid').style.display= "block";
     passwordStatus = false;
    }
 }

//Function to validate Confirm password
 let confirmPasswordFunction = () => {
     confirmPasswordStatus = false;

    let password =  document.getElementById("password-id").value;
    let confirmPassword =  document.getElementById("confirmPasswordId").value;

    if(password===confirmPassword && confirmPassword!="") //Should match Password and confirm password should not be empty
        confirmPasswordStatus= true;

        if(confirmPasswordStatus)
        {
         document.getElementById('confirm-password-valid').style.display= "block";
         document.getElementById('confirm-password-invalid').style.display= "none";
         confirmPasswordStatus= true;
        }
        else
        {
         document.getElementById('confirm-password-valid').style.display= "none";
         document.getElementById('confirm-password-invalid').style.display= "block";
         confirmPasswordStatus= false;
        }

 }

 //Function to check Terms and Condition

 let tNCFunction  = () => {
     tNCStatus = false;

    let tNC = document.getElementById("tNCId").checked;
    tNCStatus = tNC;  //Use the checkbox value

    if(tNCStatus)
    {
     
     document.getElementById('invalid-tNC').style.display= "none";
    }
    else
    {
     
     document.getElementById('invalid-tNC').style.display= "block";
    }
 }

 let removeAllValidationText = () =>{
    document.getElementById('firstName-invalid').style.display= "none";
    document.getElementById('firstName-valid').style.display= "none";
    document.getElementById('lastName-invalid').style.display= "none";
    document.getElementById('lastName-valid').style.display= "none";
    document.getElementById('email-invalid').style.display= "none";
    document.getElementById('email-valid').style.display= "none";
    document.getElementById('password-invalid').style.display= "none";
    document.getElementById('password-valid').style.display= "none";
    document.getElementById('confirm-password-invalid').style.display= "none";
    document.getElementById('confirm-password-valid').style.display= "none";
    document.getElementById('invalid-tNC').style.display= "none";
 }

 let validateAllFunction = () => {
    firstNameFunction();
    lastNameFunction();
    emailIdFunction();
    passwordFunction();
    confirmPasswordFunction();
    tNCFunction();

    
    if(firstNameStatus && lastNameStatus && emailStatus && passwordStatus && confirmPasswordStatus && tNCStatus)
    {
        alert('Your details have been saved successfully!')
        document.getElementById("form-id").reset();
        removeAllValidationText();

    }


 }