var taInput, divOutput;
var btnRun;
var fin=[];
window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	newIn=taInput.value.replace(/(\r\n|\n|\r)/gm," ").split(',');
	newIn=taInput.value.replace(/(\r\n|\n|\r)/gm,",").split(',');
	var size=newIn.length;
	console.log(size);
	var num = taInput.value.split(/\r|\r\n|\n/);
	var row = num.length;
	var col=Math.ceil(size/row);
	console.log(row);
	console.log(col);
	var u=0;
	for(var i=0;i<row;i++){
			fin.push([]);
		for(var j=0;j<col;j++){
			Loop3:
			for(var n=u;n<size;n++){
				fin[i][j]=Number(newIn[n]);
				u=n+1;
				break Loop3;
			}

		}		
	}
	console.log(fin)
	console.log(fin.length);
	var res=FwAlgo(fin);
	console.log(res);
	for(var i=0;i<res.length;i++){
		divOutput.innerHTML+=res[i]+"<br/>";
	}
	//Get Input from 
}//end run

function FwAlgo(graph){
	//Implement your solution here
	var temp=[];
	var len=graph.length;
	var i,j,k;
	for(i=0;i<len;i++){
		temp[i]=[];
		for(j=0;j<len;j++){
			temp[i][j]=graph[i][j];
		}
	}
	for(k=0;k<len;k++){
		for(i=0;i<len;i++){
			for(j=0;j<len;j++){
				temp[i][j]=(temp[i][j]!=0) || ((temp[i][k]!=0)&&(temp[k][j]!=0))?1:0;
			}
		}
	}
	return(temp);
	//Mention reference where you got the solution
	//Ref: http://https://www.geeksforgeeks.org/transitive-closure-of-a-graph/
	//Ref: If you found any paper
}	//end sol1
