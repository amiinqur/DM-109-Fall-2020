var divOutput;
window.onload = function() {
	divOutput = document.getElementById('divOutput');
}
function RandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var arr=[];
	for(i=0;i<100;i++){
		arr.push([]);
		for(j=0;j<100;j++){
			arr[i][j]=RandomNum(2);
		}
	}
console.log(arr);
try{
function runFwAlgo(){
	
	for(n=4;n<=100;n++){
		var per= performance.now();
		divOutput.innerHTML+="At n="+n+"<br/>";
		var res=FwAlgo(arr,n);
	for(var i=0;i<res.length;i++){
		divOutput.innerHTML+=res[i]+"<br/>";
	}
	var per2 = performance.now();
	divOutput.innerHTML+="Performance at N="+n+" is "+(per2-per)+" miliseconds</br>";
 }

}
}
catch(Error){
	divOutput.innerHTML=Error;
}

function FwAlgo(graph,n){
	//Implement your solution here
	var temp=[];
	var len=graph.length;
	var i,j,k;
	for(i=0;i<n;i++){
		temp[i]=[];
		for(j=0;j<n;j++){
			temp[i][j]=graph[i][j];
		}
	}
	for(k=0;k<n;k++){
		for(i=0;i<n;i++){
			for(j=0;j<n;j++){
				temp[i][j]=(temp[i][j]!=0) || ((temp[i][k]!=0)&&(temp[k][j]!=0))?1:0;
			}
		}
	}
	return(temp);
	//Mention reference where you got the solution
	//Ref: http://https://www.geeksforgeeks.org/transitive-closure-of-a-graph/
	//Ref: If you found any paper
}	//end sol1
