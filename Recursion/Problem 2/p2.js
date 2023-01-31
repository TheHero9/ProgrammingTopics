function fib(n) {
    if(n<0) return "Error, not a positive number"
  
    if(n<=1){
      return n
    } return fib(n-2) + fib(n-1)
  }
  
  
  console.log(fib(10))  // 55
  console.log(fib(20)) // 6765
  console.log(fib(-2)) // Error