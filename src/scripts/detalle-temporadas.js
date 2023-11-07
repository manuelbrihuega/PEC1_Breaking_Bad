// Obtenemos la info de las temporadas (guardada en un JSON)
import temporadas from '../data/temporadas.json';

// Obtenemos la URL actual
const url = new URL(window.location.href);
// Miramos si en la URL actual existe el parámetro "temporada" y en caso afirmativo preparamos la página de detalle temporada
if (url.searchParams.has('temporada')) {
    // Buscamos la temporada que recibimos por url
    let temporada = temporadas.find(temporada => temporada.url === url.searchParams.get('temporada'));
     // Creamos un figure y su figcaption para colocar el trailer de la temporada
    let figureTrailer = document.getElementById('trailer');
    let figcaptionTrailer = figureTrailer.getElementsByTagName('figcaption')[0];
    // Sustituimos ### del figcaption por el nombre de la temporada
    figcaptionTrailer.innerText = figcaptionTrailer.innerText.replace('###', temporada.nombre);
    // Metemos el iframe del trailer en el figure
    figureTrailer.innerHTML = temporada.trailer;
    figureTrailer.appendChild(figcaptionTrailer);
    // Colocamos el texto y la ficha en sus divs respectivos
    document.getElementsByClassName('texto')[0].innerHTML=temporada.texto;
    document.getElementsByClassName('ficha')[0].innerHTML=temporada.ficha;
    // Colocamos el nombre de la temporada en el H1 de la página
    document.getElementsByTagName('h1')[0].innerText=temporada.nombre;
    let contenidoIntro = document.getElementsByClassName('contenido')[0];
    // Sustituímos las ### de la intro por el nombre de la temporada
    contenidoIntro.innerText = contenidoIntro.innerText.replace('###', temporada.nombre); 
}