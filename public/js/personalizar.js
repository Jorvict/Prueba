$(document).on('change', '#objeto', function() {
    var valor = $("#objeto").val();

    switch (valor) {
        case "0":
                $("#foto").hide();
            break;

        case "imagen":
                $("#foto").hide();
            break;
        
        case "frases":
                $("#foto").hide();
            break;
                
        case "otros":
                $("#foto").show();
            break;
    }
    //console.log(valor);
   
});

$(document).ready(function() {
    $("#foto").hide();
});