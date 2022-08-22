const boton = document.querySelector("#notificar");
boton.addEventListener('click', function() {
    Notification.requestPermission()
    .then(resultado => console.log('Si dio permiso '+resultado))
})

if (Notification.permission == 'granted') {
    new Notification("Notificacion avanzada",{
    icon:"./img/relajarse.png",
    body: "Como hacer una notificacion personalizada"

})

}