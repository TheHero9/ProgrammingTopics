# 🧩 Overview
- ##  [♻️ What's recursion?](https://github.com/TheHero9/ProgrammingTopics/edit/main/Recursion/README.md#%EF%B8%8F-whats-recursion-1)
- ##  [➕ Pros &  ➖ Cons](https://github.com/TheHero9/ProgrammingTopics/edit/main/Recursion/README.md#-pros----cons-1)
- ##  [👣 Main Steps to solve a recursive problem](https://github.com/TheHero9/ProgrammingTopics/edit/main/Recursion/README.md#-main-steps-to-solve-a-recursive-problem-1)
- ##  [📙 Examples](#real-cool-heading)
  - ###  [🖊️ Problem 1](https://github.com/TheHero9/ProgrammingTopics/edit/main/Recursion/README.md#%EF%B8%8F-problem-1-write-a-recursive-function-that-given-an-input-n-sums-all-nonegative-integers-up-to-n-)
  - ###  [🖊️ Problem 2](https://github.com/TheHero9/ProgrammingTopics/edit/main/Recursion/README.md#%EF%B8%8F-problem-2-write-a-recursive-function-that-accepts-a-number-and-returns-the-number-at-that-position-in-the-fibonnaci-sequence-)  </br> </br> </br>  </br> 

# ♻️ What's recursion? 

### Recursion is a technique in computer programming where a function calls itself in order to solve a problem. It works by breaking a problem down into smaller and simpler sub-problems, and then solving each of those sub-problems recursively until a base case is reached. The solutions to the sub-problems are then combined to solve the original problem. </br> </br> </br> 

# ➕ Pros &  ➖ Cons
### ➕ Pros
- **Simplifies complex problems: Recursion can make code more readable and easier to understand by breaking down complex problems into smaller and simpler sub-problems.**
- **Reusable code: Recursive functions can be easily reused for similar problems, making the code more efficient.**
- **Elegant solution: Recursion provides a clean and elegant solution for problems that would otherwise require complex and difficult-to-follow control structures.**

<hr>

### ➖ Cons 
- **Errors: If a recursive function is not properly designed to have an exit condition, it can lead to an infinite loop and cause a stack overflow error.**
- **Slower performance: Recursive functions can be slower than their iterative counterparts due to the overhead of function calls.**
- **Higher memory usage: Recursive functions can consume more memory compared to iterative solutions because each function call requires the creation of a new stack frame.** </br> </br> </br> </br>

# 👣 Main Steps to solve a recursive problem
### 1. What's the simplest possible input? Find the <ins>base case</base>.
### 2. Play around with simple examples and understand the pattern.
### 3. Relate hard cases to simpler cases. Verify that your pattern is correct.
### 4. Generalize the pattern. Make a <ins>formula</base>.
### 5. Write code by <ins>combining</base> the base case with the formula. </br> </br> </br> </br> 

# 📙 Examples
### 🖊️ Problem 1: Write a recursive function that given an input "n" sums all nonegative integers up to "n". </br>
- Sum(5) = 5 + 4 + 3 + 2 + 1 = 10  </br>
- Sum(3) =  3 + 2 + 1 = 6 </br> </br> </br>

### :one:  **Step 1: What's the simplest possible output?** </br>
### Define the base case of the problem.
 <img src="Problem 1/p1basecase.png" width="350" > </br> </br> </br> <hr>

### :two: Step 2: Play around with examples and visualize your thoughts. </br>
### Try to draw the first 3-4 cases and ...
 <img src="Problem 1/p1tests.png" width="750" height="300" > 
 
 ### ...try to find if there is a pattern. Sum(4) is equal to sum(3) + 4. 
  <img src="Problem 1/p1pattern.png" width="450" > </br> </br> </br> <hr>

### :three: Step 3: Relate harder cases to simpler cases. </br>
### Solve a harder case with the your current pattern and check if it works! We can check if sum(5) = sum(4) + 5.
 <img src="Problem 1/p1harderproblem.png" width="650" height="400" > </br> </br> </br> <hr>
 
### :four: Step 4: Generalize the pattern. </br>
### Write down the formula. The final result is: sum(n) = sum(n-1) + n

 <img src="Problem 1/p1generalizeNew.png" width="750" height="300" > </br> </br> </br> <hr>

### :five: Step 5: Write code by combining recursive pattern with the base case. </br>
### Combine everything into a function.
 <img src="Problem 1/p1combine.png" width="650" height="200" >  </br> </br> </br> <hr>
 
 ### 👨‍💻 Code

### <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/> <a href="https://github.com/TheHero9/ProgrammingTopics/blob/main/Recursion/Problem%201/p1.js">JavaScript</a> 
### <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" title="Python" alt="Python" width="50" height="50"/> <a href="https://github.com/TheHero9/ProgrammingTopics/blob/main/Recursion/Problem%201/p1.py">Python</a>
 
 </br> </br> </br> 
 
 <hr style="border:8px solid black">
 
 
 ### 🖊️ Problem 2: Write a recursive function that accepts a number and returns the number at that position in the fibonnaci sequence. </br>
- By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.  </br>
- For example, the first ten Fibonacci numbers are: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34" </br> </br> </br>

### :one:  **Step 1: What's the simplest possible output?** </br>
### Define the base case of the problem. We can see that if the number is 0 or 1 the result will be accordingly 0 or 1.
 <img src="Problem 2/p2basecase.png" width="350" > 
### the base case is: if n<=1 - return n
 </br> </br> </br> <hr>

### :two: Step 2: Play around with examples and visualize your thoughts. </br>
### Try to draw the first cases and understand the defined pattern
 <img src="Problem 2/p2tests.png" width="750" height="300" > 
 
  <img src="Problem 2/p2pattern (2).png" width="450" > </br> </br> </br> <hr>

### :three: Step 3: Relate harder cases to simpler cases. </br>
### Solve a harder case with the your current pattern and check if it works! We can check if fib(10) = fib(9) + fib(8).
 <img src="Problem 2/p2harderproblem.png" width="650" height="200" > </br> </br> </br> <hr>
 
### :four: Step 4: Generalize the pattern. </br>
### Write down the formula. The final result is: fib(n) = fib(n-1) + fib(n-2).

 <img src="Problem 2/p2pattern.png" width="750" height="200" > </br> </br> </br> <hr>

### :five: Step 5: Write code by combining recursive pattern with the base case. </br>
### Combine everything into a function.
 <img src="Problem 2/p2combine.png" width="650" height="200" > </br> </br> </br>
 
 <hr style="border:8px solid black">

 ### 👨‍💻 Code

### <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="50" height="50"/> <a href="https://github.com/TheHero9/ProgrammingTopics/blob/main/Recursion/Problem%202/p2.js">JavaScript</a> 
### <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" title="Python" alt="Python" width="50" height="50"/> <a href="https://github.com/TheHero9/ProgrammingTopics/blob/main/Recursion/Problem%202/p2.py">Python</a>
 
 </br> </br> </br> 
 
 <hr style="border:8px solid black">

# 🎥 Source
### <a href="https://www.youtube.com/watch?v=ngCos392W4w&t=672s">5 Simple Steps for Solving Any Recursive Problem</a>
### <a href="https://www.youtube.com/watch?v=LteNqj4DFD8">Best Javascript Recursion Explanation on YouTube</a>
 
 
 <h1 id="test> </h1>
