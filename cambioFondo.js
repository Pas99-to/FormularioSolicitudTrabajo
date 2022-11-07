var index = 0;
var listaimg = ["./img/FondoComputadora.jpg","./img/FondoProgramming.jpg", "./img/FondoAnalisis.jpg", "./img/FondoPrincipal.jpg"];

$(function() {
    setInterval(changeImage, 3000);
});

function changeImage() {
    $('body').css("background-image",'url(' + listaimg[index] + ')');
    index++;
    if(index == 4){
        index = 0;
    }
}   