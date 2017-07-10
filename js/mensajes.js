$( document ).ready(function() {

	$(".mensaje-click").click(function(e){

		var idMensaje = $(e.target).closest( "li" ).attr("id");

		//llamada ajax para recuperar el mensaje y la respuesta y actualizar el flag "leido"

		$("#email-pregunta-titulo").text("Titulo this is a test");
		$("#email-pregunta-avatar").attr("src", "http://placehold.it/67x67");
		$("#email-pregunta-nombre").text("Gro Menawer");
		$("#email-pregunta-fecha").text("01/01/17");
		$("#email-pregunta-contenido").text("Contenido del email to loco");

		$("#email-respuesta-nombre").text("Gro Menawer");
		$("#email-respuesta-fecha").text("02/02/17");
		$("#email-respuesta-contenido").text("Aqui va la respuesta");

		$(e.target).closest( "li" ).find('b').contents().unwrap();

	});    



	$(".mensaje-eliminar").click(function(e){

		var idMensaje = $(e.target).closest( "li" ).attr("id");

		$("#email-pregunta-titulo").text("Titulo this is a test");
		$("#email-pregunta-avatar").attr("src", "http://placehold.it/67x67");
		$("#email-pregunta-nombre").text("Gro Menawer");
		$("#email-pregunta-fecha").text("01/01/17");
		$("#email-pregunta-contenido").text("Contenido del email to loco");

		$("#email-respuesta-nombre").text("Gro Menawer");
		$("#email-respuesta-fecha").text("02/02/17");
		$("#email-respuesta-contenido").text("Aqui va la respuesta");

	});  


	$(".mostrando-atras, .mostrando-adelante").click(function(e){

		var pagina = $(e.target).attr('id');
		var totalPaginas = $(e.target).closest( "li" ).attr("id");
		
		$("#email-pregunta-titulo").text("Titulo this is a test");
		$("#email-pregunta-avatar").attr("src", "http://placehold.it/67x67");
		$("#email-pregunta-nombre").text("Gro Menawer");
		$("#email-pregunta-fecha").text("01/01/17");
		$("#email-pregunta-contenido").text("Contenido del email to loco");

		$("#email-respuesta-nombre").text("Gro Menawer");
		$("#email-respuesta-fecha").text("02/02/17");
		$("#email-respuesta-contenido").text("Aqui va la respuesta");

	});  
	
});