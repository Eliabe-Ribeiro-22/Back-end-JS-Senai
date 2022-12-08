function calcularValores() {
	let valor1 = parseFloat(document.getElementById("txtValor1").value);

	let valor2 = parseFloat(document.getElementById("txtValor2").value);

	let operacao = document.getElementById("cbxOperacao").value;
	
	let resultado;
	
	switch(operacao) {
		case "+":
			resultado = valor1 + valor2;
				break;
		
		case "-":
			resultado = valor1 - valor2;
			break;
		
		case "/":
			resultado = valor1 / valor2;
			break;
			
		case "*":
			resultado = valor1 * valor2;
		break;
	
		default:
			alert("Ocorreu um erro ao calcular!")
	}
	
	document.getElementById("txtResultado").innerHTML = resultado;
}