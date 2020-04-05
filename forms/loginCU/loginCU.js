
//In case login doesn't work

btnShortcut.onclick=function(){
  ChangeForm(favFoods)
}

//clear variables

loginCU.onshow=function(){
  txtNetID.value = ""
  txtPassword.value = ""
}

btnLogin.onclick=function(){
  //Declare global variables

var req = ""

//AJAX

req = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + txtNetID.value + "&j_password=" + txtPassword.value)

if (req.responseText == 1) { //everything worked.
    ChangeForm(favFoods)
  } else {
    //had a problem with login
    txtNetID.value = ""
    txtPassword.value = ""
    lblResponse.value = `Please try again. Your username or password was invalid.`;
}
}
