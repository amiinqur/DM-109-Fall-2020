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

**Problem 1: Unable to plot the graph**  
We used the PLotly library in our HTML file but the graph was not being plotted on the HTML page. The reason for this was that we were not using the correct link to download the PLotly libray in our HTMl file. After correcting the link, we were able to plot the graph successfully.
**Problem 2: Not able to plot a line graph**  
We were finally able to plot a graph, but it was not a line graph as we wanted. It was a scattered graph and it did not really gave an elaborated view of the findings. We resolved the problem by changing the type from scatter to line graph. Then the plotted graph was a line graph with correct axis and data.
