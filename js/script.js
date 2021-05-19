$(document).ready(function() {
	
    function limpiarFormulario() {
        document.getElementById("limpiar").reset();
    }

    var idP=0;
	$('#ingresar').click(function(){
		var a= $('#nombres').val();
		var b= $('#apellidos').val();
		var c= $('#cedula').val();
		idP++;
		$('#tabla').append("<tr align='center' href='#'><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td><a href='#' data-eli="+idP+">Eliminar</a></td></tr>");
		
		$('[data-eli]').off();
   		 $('[data-eli]').click(function(){
         $(this).parents("tr").remove();
        
        Swal("Correcto", "Datos Eliminados", "success")
         
    })
		

        limpiarFormulario();

	})




	
});