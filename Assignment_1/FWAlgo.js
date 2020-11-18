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

	//end sol1
