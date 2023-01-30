
# ♻️ What's recursion? 

#### Recursion is a technique in computer programming where a function calls itself in order to solve a problem. It works by breaking a problem down into smaller and simpler sub-problems, and then solving each of those sub-problems recursively until a base case is reached. The solutions to the sub-problems are then combined to solve the original problem. </br> </br> </br> </br>

# ➕ Pros &  ➖ Cons
### ➕ Pros
- Simplifies complex problems: Recursion can make code more readable and easier to understand by breaking down complex problems into smaller and simpler sub-problems.
- Reusable code: Recursive functions can be easily reused for similar problems, making the code more efficient.
- Elegant solution: Recursion provides a clean and elegant solution for problems that would otherwise require complex and difficult-to-follow control structures.

<hr>

### ➖ Cons 
- Errors: If a recursive function is not properly designed to have an exit condition, it can lead to an infinite loop and cause a stack overflow error.
- Slower performance: Recursive functions can be slower than their iterative counterparts due to the overhead of function calls.
- Higher memory usage: Recursive functions can consume more memory compared to iterative solutions because each function call requires the creation of a new stack frame. </br> </br> </br> </br>

# 👣 Main Steps to solve a recursive problem
### 1. What's the simplest possible input? Find the <ins>base case</base>.
### 2. Play around with simple examples and understand the pattern.
### 3. Relate hard cases to simpler cases. Verify that your pattern is correct.
### 4. Generalize the pattern. Make a <ins>formula</base>.
### 5. Write code by <ins>combining</base> the base case with the formula. </br> </br> </br> </br> 

# 📙 Examples
### <ins>Problem 1: Write a recursive function that given an input "n" sums all nonegative integers up to "n". Sum(5) = 5 + 4 + 3 + 2 + 1 = 10 </ins> </br> </br> </br>

### :one:  **Step 1: What's the simplest possible output?** </br>
### Define the base case of the problem.
 <img src="p1basecase.png" width="350" > </br> </br> </br> <hr>

### :two: Step 2: Play around with examples and visualize your thoughts. </br>
### Try to draw the first 3-4 cases and ...
 <img src="p1tests.png" width="750" height="300" > 
 
 ### ...try to find if there is a pattern. Sum(4) is equal to sum(3) + 4. 
  <img src="p1pattern.png" width="450" > </br> </br> </br> <hr>

### :three: Step 3: Relate harder cases to simpler cases. </br>
### Solve a harder case with the your current pattern and check if it works! We can check if sum(5) = sum(4) + 5.
 <img src="p1harderproblem.png" width="650" height="400" > </br> </br> </br> <hr>
 
### :four: Step 4: Generalize the pattern. </br>
#### Write down the formula. The final result is: sum(n) = sum(n-1) + n

 <img src="p1generalize.png" width="750" height="300" > </br> </br> </br> <hr>

### :five: Step 5: Write code by combining recursive pattern with the base case. </br>
### Combine everything into a function.
 <img src="p1combine.png" width="650" height="200" > </br> </br> </br> <hr>
 
 
 
