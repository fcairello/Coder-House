function getValues (){
	var num1 = document.getElementById('1').value;
	var num2 = document.getElementById('2').value;

	return [num1, num2];
}

function showResult(value){
	document.getElementById('resultado').innerHTML = value;
}

function suma(){
	var values = getValues();
	showResult(sum(values[0], values[1]));	
}

function resta(){
	var values = getValues();
	showResult(res(values[0], values[1]));
}

function multiplicacion(){
	var values = getValues();
	showResult(mul(values[0], values[1]));
}

function division(){
	var values = getValues();
	showResult(divi(values[0], values[1]));
}

function sum(a,b){
	return parseInt(a)+parseInt(b);	
}

function res(a,b){
	return parseInt(a)-parseInt(b);	
}

function mul(a,b){
	return parseInt(a)*parseInt(b);	
}

function divi(a,b){
	return parseInt(a)/parseInt(b);	
}