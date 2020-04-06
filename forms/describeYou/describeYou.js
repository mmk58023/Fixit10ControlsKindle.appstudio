rdoDescribeYou.onclick=function(){
  lblPersonalityType.value = `I would agree that you are a ${$("input[name=rdoDescribeYou]:checked").prop("value")} person too!`
}


btnFavExercises.onclick=function(){
  ChangeForm(ABfavExercises)
}
