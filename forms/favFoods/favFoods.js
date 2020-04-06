let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
  //always clear before populating
  lstFavoriteFoods.clear()
  //put array goodFoods into the list
  for (i = 0; i <= goodFoods.length - 1; i++)
      lstFavoriteFoods.addItem(goodFoods[i])
}


lstFavoriteFoods.onclick=function(s){
  if (typeof(s) == "object"){
  return
} else {
  let textChoice = NSB.$("lstFavoriteFoods_" + s).textContent 
  lblMessage.value = `You picked ${textChoice} -that is a great choice!`
}
}

btnNextPage.onclick=function(){
  ChangeForm(dessertVoting)
}
