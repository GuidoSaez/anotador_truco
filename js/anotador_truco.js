let max = 30;

$(document).ready (function() {
    $("#a15").on('click', fnSetearA15);
	$("#a30").on('click', fnSetearA30);
    $("#iniciar").on('click', fnInicio);
    $("#sumarEquipo1").on('click', function() {
        fnSumarPuntos(1);
    });
    $("#sumarEquipo2").on('click', function() {
        fnSumarPuntos(2);
    });
    $("#restarEquipo1").on('click', function() {
        fnRestarPuntos(1);
    });
    $("#restarEquipo2").on('click', function() {
        fnRestarPuntos(2);
    });
    $("#fin").on('click', fnFin);

})

// FUNCIONES PANTALLA 1

function fnInicio() {

    // coloca el nombre del equipo1 en la pantalla 2
    let nombreEquipo1 = $("#equipo1").val();
    $("#equipo1_nombre").text(nombreEquipo1);

    // coloca el nombre del equipo2 en la pantalla 2
    let nombreEquipo2 = $("#equipo2").val();
    $("#equipo2_nombre").text(nombreEquipo2);

    // se juega a 30 por defecto
    $("#max").text("A "+ max);

    // se reinicia a cero los fosforos
    $(".img").attr("src","/asset/img/0.png");

    // se pone en cero el puntaje del equipo 1
    $("#puntos_equipo1").text("0");

    // se pone en cero el puntaje del equipo 2
    $("#puntos_equipo2").text("0");

    // oculta la pantalla 1
    $("#pantalla1").removeClass("visible").addClass("oculto");

	//	muestra pantalla 2
	$("#pantalla2").removeClass("oculto").addClass("visible");
}

function fnSetearA15() {
    max = 15;
    $("#a30").removeClass("seleccionado");
	$("#a15").addClass("seleccionado");
}

function fnSetearA30() {
    max = 30;
    $("#a15").removeClass("seleccionado");
	$("#a30").addClass("seleccionado");
}

// FUNCIONES PANTALLA 2

function fnSumarPuntos(numeroEquipo) {
    let puntosActuales = $("#puntos_equipo" + numeroEquipo).text();
    puntosActuales = parseInt(puntosActuales);

    if (puntosActuales < max) {
        puntosActuales++;
        $("#puntos_equipo" + numeroEquipo).text(puntosActuales);
        fnDibujarFosforos(numeroEquipo);
    }
}

function fnRestarPuntos(numeroEquipo) {
    let puntosActuales = $("#puntos_equipo" + numeroEquipo).text();
    puntosActuales = parseInt(puntosActuales);

    if (puntosActuales > 0) {
        puntosActuales--;
        $("#puntos_equipo" + numeroEquipo).text(puntosActuales);
        fnDibujarFosforos(numeroEquipo);
    }
}



function fnDibujarFosforos(numeroEquipo) {
    let puntos = parseInt($("#puntos_equipo" + numeroEquipo).text());
    let fosforos;

    if (max == 30) {

        if (puntos > 0 && puntos <= 5) {
            fosforos = puntos;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 5 && puntos <= 10) {
            fosforos = puntos - 5;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 10 && puntos <= 15) {
            fosforos = puntos - 10;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 15 && puntos <= 20) {
            fosforos = puntos - 15;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 20 && puntos <= 25) {
            fosforos = puntos - 20;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 25 && puntos <= 30) {
            fosforos = puntos - 25;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/"+ fosforos +".png");
        } else {
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/0.png");
        }
        
    }

    if (max == 15) {
        if (puntos > 0 && puntos <= 5) {
            fosforos = puntos;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 5 && puntos <= 10) {
            fosforos = puntos - 5;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else if (puntos > 10 && puntos <= 15) {
            fosforos = puntos - 10;
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+2).attr("src", "../asset/img/5.png");
            $("#p"+numeroEquipo+3).attr("src", "../asset/img/"+ fosforos +".png");
            $("#p"+numeroEquipo+4).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+5).attr("src", "../asset/img/0.png");
            $("#p"+numeroEquipo+6).attr("src", "../asset/img/0.png");
        } else {
            $("#p"+numeroEquipo+1).attr("src", "../asset/img/0.png");
        }    
    }
}










function fnFin() {
    $("#equipo1").val('');
    $("#equipo2").val('');
    $("#pantalla2").removeClass("visible").addClass("oculto");
    $("#pantalla1").removeClass("oculto").addClass("visible");
}
