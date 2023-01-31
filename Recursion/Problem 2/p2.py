def fib(n):
    if n<0: 
        return "Error"

    if n<=1:
      return n
    else: 
        return fib(n-2) + fib(n-1)
        
print(fib(10))  #55
print(fib(20))  #6765
print(fib(-2))  #Error