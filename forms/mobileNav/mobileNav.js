let forms = ["Login", "Favorite Foods", "Dessert Voting", "Describe Me", "Favorite Exercises"]



mobileNav.onshow=function(){
  hmbMenu.clear()
  //put array of forms in the dropdown
  for (i = 0; i <= forms.length - 1; i++)
      hmbMenu.addItem(forms[i])
}


hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
      return
} else {
      
switch(s) {
  case "Login":
        ChangeForm(loginCU)
        break
  case "Favorite Foods":
        ChangeForm(favFoods)
        break
  case "Dessert Voting":
        ChangeForm(dessertVoting)
        break
  case "Describe Me":
        ChangeForm(describeYou)
        break
  case "Favorite Exercises":
        ChangeForm(favExercises)
        break
        }
    }
}
