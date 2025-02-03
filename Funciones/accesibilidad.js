// Esperamos a que se carge todala página para ejecutar el scripr, y accedemos el elementoque el id "toggleAccesible", por otro lado creamos un boton en el cual podamos activaro desactivar este elemento, y creamos una función que lea el texto, es español, con un volumen1, a la velocidad especificada... 
document.addEventListener("DOMContentLoaded", function () {
    const toggleAccesible = document.getElementById("toggleAccesible");
    toggleAccesible.addEventListener("click", function () {
        document.body.classList.toggle("modo-accesible");
    });
    window.leerTexto = function (id) {
        let texto = document.getElementById(id).innerText;
        let speech = new SpeechSynthesisUtterance();
        speech.text = texto;
        speech.lang = "es-ES";
        speech.rate = 1;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    };
});
