# DM 109 FALL 2020: Final Phase #
### PROJECT MEMBERS ###
StdID | Name
------------ | -------------
**63855** | **Amin M. Quraishi** <!--this is the group leader in bold-->
63856 | Muhammad Ahmad Quraishi
63857 | Basil Quraishi
<!-- Replace name and student ids with acutally group member names and ids-->



## Findings ## 
After running the graph on our results from phase 1 of the project, we were quite surprised. We were expecting a straight linear graph because we thought as input size increased, time taken also increases. But that was not the case, as the findings from the graph contradicted our hypothesis. The line was constanly changing from the beginning to the end. The time taken at each iteration was relatively different and at some cases, completely different. 

We would deduce from the findings of the graph that it is not neccessary that input size increases the time taken for the Warshall algorithm. It depends on the values of the particular input matrix. This is the reason the graph showed unequal trend with drastic peaks and drops. 

## Time Complexity ##

**Time Complexity of Warshall Algorithm: O(n^3)**  

Time complexity of Warshall algorithm is quite exceptional in comparison to other path finding algorithms. We executed the graph multiple times with different inputs to figure out the time complexity. And the most time taken for an iteration to be solved was between 3 and 3.5 milliseconds only. This proves how great the time complexity of Warshall algorithm is. The reason the complexity of Warshall algorithm is O(n^3) is because of the FOR loops. We use three FOR loops in the algorithm to get the desired result.

## Problems Faced ##  

**Problem 1: Unable to get random 0s and 1s**  
In the beginning we were having a tough time getting random 0s and 1s into an array. Then we looked up on the internet and stumble upon the Math.Random() function in javascript. After applying the function correctly, we were able to generate random 0s and 1s for our 100x100 array.  

**Problem 2: Not able to show the ouptput of each N**  
We were stuck at a dead end when we tried to show the output value of each N in our HTML file. But then we got the solution; We were coding "divOutput.innerHTML="At n="+n;" and this line was just printing one line at the end instead of printing it 100 times. Then we changed it to "divOutput.innerHTML+="At n="+n;" and it worked and printed the output at every iteration.

**Problem 3: Not being able to calculate the performance**  
We used the performance.now() function to calculate the performance but we did not really now how to use the function. Then we researched upon it a bit and were able to successfully calculate the performance of the algorithm at each iteration.
