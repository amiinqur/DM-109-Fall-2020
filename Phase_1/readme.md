# DM 109 FALL 2020: Project Phase 1 #
### PROJECT MEMBERS ###
StdID | Name
------------ | -------------
**63855** | **Amin M. Quraishi** <!--this is the group leader in bold-->
63856 | Muhammad Ahmad Quraishi
63857 | Basil Quraishi
<!-- Replace name and student ids with acutally group member names and ids-->

## Time Complexity ##

**Time Complexity of Floyd-Warshall Algorithm: O(n^3)**  


## Analysis ## 
In the second phase of the project we were required to find the performance of warshall algortihm at different sizes of matrix. After successfully running our program, we deduced that as the matrix size increased the time taken also increased. Therefore, the performance of warshall algortihm decreases in terms of time as the input size increases. 

## Problems Faced ##  

**Problem 1: Unable to get random 0s and 1s**  
In the beginning we were having a tough time getting random 0s and 1s into an array. Then we looked up on the internet and stumble upon the Math.Random() function in javascript. After applying the function correctly, we were able to generate random 0s and 1s for our 100x100 array.  

**Problem 2: Not able to show the ouptput of each N**  
We were stuck at a dead end when we tried to show the output value of each N in our HTML file. But then we got the solution; We were coding "divOutput.innerHTML="At n="+n+"<br/>";" and this line was just printing one line at the end instead of printing it 100 times. Then we changed it to "divOutput.innerHTML+="At n="+n+"<br/>";" and it worked and printed the output at every iteration.

**Problem 3: Not being able to calculate the performance**  
We used the performance.now() function to calculate the performance but we did not really now how to use the function. Then we researched upon it a bit and were able to successfully calculate the performance of the algorithm at each iteration.
