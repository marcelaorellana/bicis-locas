function validateForm(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
	var seleccion = document.getElementsByTagName('select')[0].selectedIndex;

	if (nombre == "" || nombre.charAt(0).toUpperCase() != nombre.charAt(0) || /^[a-zA-Z]+$/.test(nombre) == false){
		var errorNombre=document.createElement('div');
		errorNombre.setAttribute("id","nombre1");
		errorNombre.setAttribute("class","inputs");
		var spanNombre = document.createElement('span');
		spanNombre.innerHTML= 'Escribe tu nombre con Mayúscula';                   
		errorNombre.appendChild(spanNombre);
		document.getElementById("name").parentNode.appendChild(errorNombre);

		return false;
	}
	else if (apellido == "" || apellido.charAt(0).toUpperCase() != apellido.charAt(0) || /^[a-zA-Z]+$/.test(apellido) == false){
		var errorApellido=document.createElement('div');
		errorApellido.setAttribute("id","apellido1");
		errorApellido.setAttribute("class","inputs");
		var spanApellido = document.createElement('span');
		spanApellido.innerHTML= 'Escribe tu apellido con Mayúscula';                   
		errorApellido.appendChild(spanApellido);
		document.getElementById("lastname").parentNode.appendChild(errorApellido);

		return false;
	}
	else if(correo.indexOf("@") == -1){
		var errorCorreo=document.createElement('div');
		errorCorreo.setAttribute("id","correo1");
		errorCorreo.setAttribute("class","inputs");
		var spanCorreo = document.createElement('span');
		spanCorreo.innerHTML= 'Correo No Válido';                   
		errorCorreo.appendChild(spanCorreo);
		document.getElementById("input-email").parentNode.appendChild(errorCorreo);
	}
	else if(contrasena.length < 6 || contrasena == "password" || contrasena == "123456" || contrasena == "098765"){
		var errorContrasena=document.createElement('div');
		errorContrasena.setAttribute("id","contrasena1");
		errorContrasena.setAttribute("class","inputs");
		var spanContrasena = document.createElement('span');
		spanContrasena.innerHTML= 'Contraseña no válida';                   
		errorContrasena.appendChild(spanContrasena);
		document.getElementById("input-password").parentNode.appendChild(errorContrasena);
	}
	else if(seleccion == 0){
		var errorSeleccion=document.createElement('div');
		errorSeleccion.setAttribute("id","seleccion1");
		errorSeleccion.setAttribute("class","inputs");
		var spanSeleccion = document.createElement('span');
		spanSeleccion.innerHTML= 'Elija un tipo de bicicleta';                   
		errorSeleccion.appendChild(spanSeleccion);
		document.getElementsByTagName('select')[0].parentNode.appendChild(errorSeleccion);
	}


		//alert("nombre: " + nombre + " " + apellido + "\nCorreo: " + correo + 
		//	"\nContraseña: " + contrasena);

		return true;
}