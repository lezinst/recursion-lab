var getElementsByClassName = function(className) {
var classArray = [];
var allNodes = document.body;
console.log(allNodes);

 function addClass(node, className){

 	if(node.classList){
 	  if(node.classList.contains(className)){
 		classArray.push(node);
 	  }
 	 }

 	for(var i = 0; i < node.childNodes.length; i++){
 		console.log('currentnode:', node.childNodes[i], 'iteration:', i);
 		addClass(node.childNodes[i], className);
 	}
 }

  addClass(allNodes, className);
 return classArray;

}


console.log(getElementsByClassName('second'));