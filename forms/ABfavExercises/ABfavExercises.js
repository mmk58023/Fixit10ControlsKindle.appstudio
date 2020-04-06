var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

ABfavExercises.onshow=function(){
  //always clear before populating    
  selExercises.clear()   
  //put array dessertList into the dropdown
  for (i = 0; i <= exercises.length - 1; i++)
      selExercises.addItem(exercises[i])
}

btnShowSelection.onclick=function(){
  for (i = 0; i <= selExercises.text.length - 1; i++)
  for (s = 0; s <= coreExercises.length - 1; i++)
    
  if (selExercises.text[i] === coreExercises[s]) {
    modSelectedExercises.value = `You chose: ${selExercises.text[i]} - those are the two core exercises.`
    modSelectedExercises.toggle()
  } else {
    modSelectedExercises.value = `You chose: ${selExercises.text[i]} - those are not the two core exercises. `
    modSelectedExercises.toggle()
    }
}


btnReturnExercises.onclick=function(){
  ChangeForm(ABfavExercises)
}


btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
