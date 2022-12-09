let alcool = parseFloat(prompt("Insira o valor do álcool:", ""))
let gasolina = parseFloat(prompt("Insira o valor da gasolina:", ""))
let calculo = parseFloat(alcool / gasolina)
var h2 = document.querySelector('h2')
if(calculo <= 0.7){
	let texto = "É melhor abastecer com álcool!"
	alert(texto)
	h2.innerHTML = texto; 
}
else{
	let texto = "É melhor abastecer com gasolina!" 
	alert(texto)
	h2.innerHTML = texto; 
}