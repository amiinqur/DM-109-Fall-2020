# DM 109 FALL 2020: Assignment 1 #
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
After analysing the Floyd-Warshall algorithm, we figured out that this algorithm finds the shortest path between different pairs in a graph and/or a matrix. The algorithm uses dynamic programming to reap out the results. This means that this algrotihm divides the primary problem into various sub-problems. Solving all the sub-problems will bring out the fastest optimal solution. That is why Floyd-Warshall algorithm is one of the most effective algorithms for finding the shortest path of any given graph.  

## Problems Faced ##  

**Problem 1: Not getting the matrix value from html file**  
We were not able to get the matrix value from the variable that was assigned to the innerHtml tag. Then we found out that we had to use the .value function in order to get the matrix value. After using the value function we were sucessfully able to move the matrix value from the HTML file into our variable.  

**Problem 2: Difficulty in converting the input from HTML into array**  
When we got the input value into our variable, we discovered that the input we got was in a single string. The whole matrix was coming in a single string. Then we used split() and replace() function in order to successfully convert the string into 2D array. We used for loops to get the 2D array, and to get the number of rows and columns.  

**Problem 3: Not being able to show the output on the HTML file**  
When we showed the output of our algorithm on the output text area of the HTML file, only the first row of the output was being displayed. Then we used for loop and the line break function in order to show every row of our output. After that we were successfully able to show the whole output on the HTML file.
