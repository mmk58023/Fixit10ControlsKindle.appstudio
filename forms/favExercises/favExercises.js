var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  //always clear before populating    
  selExercises.clear()   
  //put array dessertList into the dropdown
  for (i = 0; i <= exercises.length - 1; i++)
      selExercises.addItem(exercises[i])
}

btnShowSelection.onclick=function(){
  let message = "The exercises you chose are:"
  for (i = 0; i <= selExercises.text.length - 1; i++)
      message = message + selExercises.text[i] + "<br />  and "
  NSB.MsgBox(message)
}


btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
