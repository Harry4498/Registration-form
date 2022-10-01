# RegistrationForm01102022
 
The project is divided into 2 Sections: 

A) NavBar/Header 

B)Form

In each field(input tag of form) , an onkeyup event handler calls corresponding function to validate based on the conditions provided and accordingly displays valid or invalid message for respective fields.

document.getElementById("").value; is used to get value of each field and later  document.getElementById('firstName-valid').style.display= "block";  is used to display and "none" to hide validation message respectively

On using Submit button, validateAllFunction is triggered which in turn calls all the functions which were previously called individually for respective field.  To keep track which conditions are met and which are not, 6 flag variables are used with global scope.

removeAllValidationText function removes all validation text messages from Form and is triggered only when All details are submitted 

Comments are added for readability of code.
