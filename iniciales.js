function nombres (a){
		var todas = new Array();
		var respuesta = new String;
		
		var palabras = a.split(" ");
		for(var i = 0; i<palabras.length; i++){
			todas[i] = palabras[i].charAt(0);
			respuesta = respuesta.concat(todas[i]);
		}
		
		return respuesta.toUpperCase();
}

nombres ("Felipe manuel cairello");