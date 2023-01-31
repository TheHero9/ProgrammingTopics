def sum(n){

  if(n<0) return "Enter a positive number"

  if(n===0){
    return 0
    }else {
      return sum(n-1) + n
    }
 }
 print(sum(5)) //15
 print(sum(28)) //406
 print(sum(300)) //45150