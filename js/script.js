const userPassword = 1234;
const invalidDataMessage = document.querySelector('.')
$(document).ready(function () {

    $('#form').on('submit', function(event) {
        if (form.checkValidity() === false) { //En caso de que no sea válido un input, detiene el envío de datos
            event.stopPropagation();
        } else {
            console.log($(this).serialize()); //Datos del formulario
        }

        if ($('input[name=password]').val() != userPassword){
            
            $('input[name=password]').val('');
        }
        event.preventDefault();
        $(this).addClass('was-validated');
    });

});


