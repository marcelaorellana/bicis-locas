function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var seleccion = document.getElementsByTagName('select')[0].selectedIndex;

	if (nombre == "" || nombre.charAt(0).toUpperCase() != nombre.charAt(0)){
		var errorNombre=document.createElement('div');
		errorNombre.setAttribute("id","nombre1");
		errorNombre.setAttribute("class","inputs");
		var spanNombre = document.createElement('span');
		spanNombre.innerHTML= 'Escribe tu nombre con Mayúscula';                   
		errorNombre.appendChild(spanNombre);
		document.getElementById("name").parentNode.appendChild(errorNombre);

		return false;
	}
		if (apellido == "" || apellido.charAt(0).toUpperCase() != apellido.charAt(0)){
		var errorApellido=document.createElement('div');
		errorApellido.setAttribute("id","apellido1");
		errorApellido.setAttribute("class","inputs");
		var spanApellido = document.createElement('span');
		spanApellido.innerHTML= 'Escribe tu apellido con Mayúscula';                   
		errorApellido.appendChild(spanApellido);
		document.getElementById("lastname").parentNode.appendChild(errorApellido);

		return false;
	}




		return true;
}