rdoDescribeYou.onclick=function(){
  lblPersonalityType.value = `I would agree that you are a ${$("input[name=rdoDescribeYou]:checked").prop("value")} person too!`
}

btnABfavExercises.onclick=function(){
  ChangeForm(favExercises)
}
