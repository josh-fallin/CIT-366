function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   if (listA === null || listB === null) {
	   	return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
	   	 var nextValue = listA[i];
	   	 for (var j = 0; j < listA.length; j++) {
	   		if (listB[j] === nextValue) {
                resultList.push(listB[j]);
                break;
			}
		}
	   }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
