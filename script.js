var grids = document.querySelectorAll('[class^="gridnum"]')
for (grid of grids){
  grid.addeventlistener('click', graphicModule.changeToCross)
}
var graphicModule = (function(){
  var changeToCross = function(event){
    var div = event.target;
    div.classlist.add("circle")
  }
  return {changeToCross}
})()
var gameLogicModule = function(){}


