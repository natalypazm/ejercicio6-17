function calcular()
{
	var a =parseInt(document.getElementById("a").value);
	var b =parseInt(document.getElementById("b").value);
	var salida = document.getElementById("salida");
	if ((a == 10 || b == 10) ||( a+b ==10 )){
		salida.innerHTML = 1;
	}
	else{
		salida.innerHTML = 0;
	}

}