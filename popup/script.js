// tableau contient l'ensemble des citations
var citation =["Oui c'est peut-être cela le bonheur, le sentiment apitoyé de notre malheur.","la vie est le bonheur","Dans la nuit démente, leurs visages apitoyés témoignaient de la peur d'être compromises.","La vie est parsemée d'épines plus que de fleurs.","Il n'est vie que de langoureux"];

var Popupbutton= document.getElementById('Popupbutton');
var overlay = document.getElementById('overlay');
Popupbutton.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}
var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
    overlay.style.display='none';
    }


  // ajoute de citation dans le div une fois je clic 
var sec = document.getElementById('kader');
var txt = document.createElement('p');
 // chaque fois on actualise on regarde une nouvelle citation qui s'affiche
let indice_aleatoire =Math.floor(Math.random() * citation.length)
txt.textContent=citation[indice_aleatoire];   
sec.appendChild(txt);
 

