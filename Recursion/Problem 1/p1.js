function sum(n){  

    if(n<0) return "Enter a positive number"
  
    if(n===0){
      return 0
      }else {
        return sum(n-1) + n
      }
   }  
   console.log(sum(5)) //15
   console.log(sum(28)) //406
   console.log(sum(300)) //45150
