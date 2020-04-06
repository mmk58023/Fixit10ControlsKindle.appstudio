var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
  //always clear before populating    
  drpDesserts.clear()   
  //put array dessertList into the dropdown
  for (i = 0; i <= dessertList.length - 1; i++)
      drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(s){
  // this 'if' kicks user out if they  just clicked on control but not on one item in the list.
  if (typeof(s) == "object") {   
  return                    
  } else {  // the user picked something
  drpDesserts.value = s
  lblDessertPick.value = `You picked ${s} -that is a great choice!`
  }
}

btnDescribeYou.onclick=function(){
  ChangeForm(describeYou)
}
