function Set() {
	
	// list of all elements common to sets A and B
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
		 if (listA === null || listB === null) 
		 {
	   	return null;
	   }

		 for (var i = 0; i < listA.length; i++) 
		 {
				for (var j = 0; j < listB.length; j++) 
				{
				 if (listB[j] === listA[i]) 
				 {
           resultList.push(listB[j]);
					 break;
				 }
				}
	   }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
    
    
  // combined list of elements from both A and B with no duplicates -> combine symmetric difference with intersection 
	this.union = function(listA, listB) {

	   var resultList = [];
       
		 /*-------------------------------Insert your code here -------------------------------------*/
		 if (listA === null || listB === null) 
		 {
	   	return null;
		 }
		 
		 resultList = this.symmetricDifference(listA, listB);
		 var temp = this.intersection(listA, listB);
		 for (var i = 0; i < temp.length; i++)
		 {
			 resultList.push(temp[i]);
		 }
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}



  // all elements in set A but not set B
	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
		 /*-------------------------------Insert your code here -------------------------------------*/
		 if (listA === null || listB === null)
		 {
			 return null;
		 }
		 if (listA.length > 0 && listB.length === 0)
		 {
			 return listA;
		 }
		 if (listA.length === 0)
		 {
			 return resultList;
		 }

		for (var i = 0; i < listA.length; i++) 
		{
			 for (var j = 0; j < listB.length; j++) 
			 {
				 if (listA[i] === listB[j]) 
				 {
					 break;
				 }
				 // if we made it to the end of the list, add the element
				 if (j === listB.length - 1)
				 {
					 resultList.push(listA[i]);
				 }
			 }
		}
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}


  // a combined list of elements unique to each set -> A \ B plus B \ A
	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
		 /*-------------------------------Insert your code here -------------------------------------*/
		 if (listA === null || listB === null) 
		 {
	   	return null;
		 }
		 
		 resultList = this.relativeComplement(listA, listB);
		 var temp = this.relativeComplement(listB, listA);
		 for (var i = 0; i < temp.length; i++)
		 {
			 resultList.push(temp[i]);
		 }
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
