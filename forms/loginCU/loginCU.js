
//In case login doesn't work

btnShortcut.onclick=function(){
  ChangeForm(favFoods)
}

//clear variables

loginCU.onshow=function(){
  inptNetID.value = ""
  inpPassword.value = ""
}

btnLogin.onclick=function(){
  //Declare global variables

var req = ""

//AJAX

req = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inpPassword.value)

if (req.status == 200) { //everything worked.
    lblResponse.hidden = false
    lblResponse.value = "Your LDAP return code was " + req.responseText
    //1 good 0 bad
  } else {
    //had a problem with the AJAX request
    lblResponse.hidden = false
    lblResponse.value = "Error: " + req.status;
}
}
