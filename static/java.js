document.addEventListener('DOMContentLoaded', () => {
	
	var h1 = document.getElementById('h1');
	var h2 = document.getElementById('h2');
	var h3 = document.getElementById('h3');
	var h4 = document.getElementById('h4');
	var h5 = document.getElementById('h5');

	var p1 = document.getElementById('p1');
	var p2 = document.getElementById('p2');
	var p3 = document.getElementById('p3');
	var p4 = document.getElementById('p4');
	var p5 = document.getElementById('p5');

	var constant = document.getElementById('hx')
	var constantp = document.getElementById('px')
	var habilidades = [];
	var lenguajes = [];
	var habilitrue = false;
	var lenguajetrue = false;
	var i1 = document.getElementsByName('ingles');
	var niveltrue = false;
	document.addEventListener('click', function()
	{
		habilidades = [];
		lenguajes = [];

		for (var i = 0;i < 4; i++)
		{
			if (i1[i].checked == true){
				console.log("continue");
				niveltrue=true;
			}
		}
		if (h1.checked == true)
			habilidades.push(h1.value);
		if (h2.checked == true)
			habilidades.push(h2.value);
		if (h3.checked == true)
			habilidades.push(h3.value);
		if (h4.checked == true)
			habilidades.push(h4.value);
		if (h5.checked == true)
			habilidades.push(h5.value);

		if (p1.checked == true)
			lenguajes.push(p1.value);
		if (p2.checked == true)
			lenguajes.push(p2.value);
		if (p3.checked == true)
			lenguajes.push(p3.value);
		if (p4.checked == true)
			lenguajes.push(p4.value);
		if (p5.checked == true)
			lenguajes.push(p5.value);

		console.log(habilidades);
		console.log(lenguajes);
		constantp.setAttribute('value', lenguajes);
		constant.setAttribute('value', habilidades);
		if (habilidades[0] && lenguajes[0]) {
			habilitrue = true;
			lenguajetrue = true;
		}
		else {
			habilitrue = false;
			lenguajetrue = false;
		}
	})
	var controller1 = false;
	var controller2 = false;
	var controller3 = false;
	var controller4 = false;
	var controller5 = false;
	var controller6 = false;

	//Boton Controllers
	document.querySelector('#submit').disabled = true;

	document.querySelector('#nombre').onkeyup = () => {
		if (document.querySelector('#nombre').value.length > 0){
			controller1 = true;
		}
	}
	document.querySelector('#ocupacion').onkeyup = () => {
		if (document.querySelector('#ocupacion').value.length > 0){
			controller2 = true;
		}
	}
	document.querySelector('#email').onkeyup = () => {
		if (document.querySelector('#email').value.length > 0){
			controller3 = true;
		}
	}
	document.querySelector('#Aptitud').onkeyup = () => {
		if (document.querySelector('#Aptitud').value.length > 0){
			controller4 = true;
		}
	}
	document.querySelector('#perfil').onkeyup = () => {
		console.log(document.querySelector('#perfil').value)
		if (document.querySelector('#perfil').value.length > 0){
			controller5 = true;
		}
	}
	document.addEventListener('click', function()
	{
		if (controller1 == true & controller2 == true & controller3 == true 
			& controller4 == true & controller5 == true
			& habilitrue == true & niveltrue == true & lenguajetrue == true)
		{
			document.querySelector('#submit').disabled = false;
		}
		else {
			document.querySelector('#submit').disabled = true;
		}
	})
});