const reproductor ={
reproducir: function (id) {
    console.log('Reproduciendo musica #:'+id);
    
},
pausar: function () {
    console.log("Pausando");
}

}

reproductor.reproducir(3840);
reproductor.pausar();