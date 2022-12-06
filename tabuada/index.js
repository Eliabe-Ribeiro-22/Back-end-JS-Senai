let tabuada = parseInt(prompt("Digite o número que quer saber a tabuada: ", ""))
div = document.querySelector("#box")
	console.log("Tabuada do número: " + tabuada)
	for(i=1; i<=10; i++){
		console.log(i + " x " + tabuada + " = " + i * tabuada) 
	}