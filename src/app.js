
import Splide from '@splidejs/splide';

// Frases célebres
const frasesCelebres = ['Nunca cometas dos veces el mismo error', 'Tú conoces el negocio y yo conozco la química', 'Cállate y déjame morir en paz', 'Aléjate de mi territorio', 'Estoy en el negocio del imperio', 'Nunca le mientas a un mentiroso', '¿Desde cuándo los veganos comen pollo frito?', '¿Ese era tu Heisenberg?', 'Última oportunidad de mirarme, Héctor', '¿El alma? No hay nada aquí, solo química', 'Skyler, eres el amor de mi vida, sé que lo sabes', 'Es mi ropa buena, no puedo llegar a casa oliendo a droga', 'Esto es cristal puro… ¡Usted es un maldito artista!', 'Esto no es química, es arte', 'Si quiere cocinar cocine en su casa'];

// Cargamos una frase célebre aleatoria
let fraseCelebre = document.getElementById('frase-celebre');
if (fraseCelebre!==null) {
    fraseCelebre.innerText = frasesCelebres[(Math.floor(Math.random() * frasesCelebres.length))];
}

// Personajes de la serie
const personajes = [
    { nombre : 'Walter White', url : 'walter', imagen : 'walter.jpg', imagenFicha : 'walter-ficha.jpg', aspecto : 'tall', ficha : '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Walter Hartwell White</li><li>Alias: Heisenberg</li><li>Fecha de nacimiento: <time datetime="1958-09-07">7 de Septiembre de 1958</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Profesor de química y Fabricante de metanfetamina</li><li>Pareja: Skyler White</li><li>Hijos: Walter White Jr. y Holly White</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Pilot» (2008)</li><li>Última aparición: «Felina» (2013)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Bryan Cranston</li><li>Doblador en España: Miguel Ayones</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Walter Hartwell White (apodado <strong>Heisenberg</strong>), es el personaje protagonista de la serie. El personaje es interpretado por el actor <strong>Bryan Cranston</strong>.</p><p>Es presentado como un químico graduado del Instituto de Tecnología de California, quien cofundó la empresa Gray Matter Technologies. Dejó Gray Matter abruptamente, vendiendo sus acciones por $5,000. Poco después, la compañía hizo una fortuna, en gran parte gracias a la investigación de Walt. Posteriormente, Walt se mudó a Albuquerque, Nuevo México, donde se convirtió en profesor de química en la escuela secundaria. En su 50 cumpleaños, se le diagnostica cáncer de pulmón en estadio IIIA. Después de este descubrimiento, Walt recurre a la fabricación y venta de metanfetamina con un exalumno suyo, <a href="detalle.html?personaje=jesse">Jesse Pinkman</a> (Aaron Paul), para garantizar la seguridad económica de su familia después de su muerte. Se sumerge cada vez más en el tráfico de drogas ilícitas, volviéndose más despiadado a medida que avanza la serie, y luego adopta el alias "Heisenberg", que se vuelve reconocible como una figura clave en el tráfico de drogas del suroeste.</p><p>Tanto el personaje como la actuación de Cranston han recibido elogios de la crítica y White se menciona con frecuencia como uno de los personajes televisivos más grandes e icónicos de todos los tiempos. Cranston ganó cuatro premios Emmy como actor principal destacado en una serie dramática, tres de ellos consecutivos. Es el primer actor en ganar un Critics Choice, Golden Globe, Primetime Emmy y Screen Actors Guild Award por su actuación. Cranston repitió el papel de Walt en un flashback de la secuela de Breaking Bad, El Camino, y lo repitió de nuevo en la sexta y última temporada de la serie precuela Better Call Saul.</p>'},
    { nombre : 'Jesse Pinkman', url : 'jesse', imagen : 'jesse.jpg', imagenFicha : 'jesse-ficha.jpg', aspecto : 'tall', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Jesse Bruce Pinkman</li><li>Alias: Jesse</li><li>Fecha de nacimiento: <time datetime="1984-09-24">24 de Septiembre de 1984</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Traficante de metanfetamina</li><li>Padres: Adam Pinkman y Señora Pinkman</li><li>Pareja(s): Jane Margolis [Fallecida] y Andrea Cantillo [Fallecida]</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Pilot» (2008)</li><li>Última aparición: «Felina» (2013)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Aaron Paul</li><li>Doblador en España: Alejandro Martínez</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Jesse Bruce Pinkman es uno de los personajes principales de la serie, interpretado por <strong>Aaron Paul</strong>. Jesse es un traficante de metanfetaminas exalumno del protagonista de la serie, <a href="detalle.html?personaje=walter">Walter White</a>, quien se convierte en su socio, ayudándolo a ganar dinero para dejarlo a su familia antes que muera por su cáncer de pulmón.</p><p>Jesse es el único personaje además de Walt que aparece en todos los episodios del programa. Paul repitió el papel para la película derivada de 2019 El Camino: A Breaking Bad Movie, una secuela de la serie ambientada después de su final, y nuevamente en 2022 para la sexta y última temporada de la serie precuela Better Call Saul, siendo uno de los pocos personajes que aparecen tanto en los programas como en la película.</p><p>A pesar de los planes para matar al personaje al final de la primera temporada, la actuación de Paul convenció al productor ejecutivo y escritor principal Vince Gilligan de mantener a Jesse en el programa. El personaje y la actuación de Paul han recibido elogios de la crítica y los fanes. Los críticos elogiaron especialmente el desarrollo del personaje de Jesse de un traficante de drogas antipático a la brújula moral del programa a medida que se vuelve cada vez más culpable y arrepentido por sus acciones y las de Walter White mientras estaba involucrado en el tráfico de drogas.</p><p>Por su interpretación, Paul ganó el Premio Primetime Emmy como Mejor Actor de Reparto en una Serie Dramática en 2010, 2012 y 2014, convirtiéndolo en el primer actor en ganar la categoría tres veces desde su separación en drama y comedia.</p>'},
    { nombre : 'Gus Fring', url : 'gus', imagen : 'gus.jpg', imagenFicha : 'gus-ficha.jpg', aspecto : 'tall', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Gustavo Fring</li><li>Alias: Gus</li><li>Fecha de nacimiento: <time datetime="1958">1958</time></li><li>Nacionalidad: Chileno</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Cofundador de Los Pollos Hermanos y Asociado del cartel de Juárez</li><li>Padres: Se desconocen</li><li>Pareja: No tiene</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Mandala» (2009)</li><li>Última aparición: «Face off» (2011)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Giancarlo Esposito</li><li>Doblador en España: Manuel Bellido</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Gustavo "Gus" Fring es un personaje de las series de televisión dramáticas estadounidenses Breaking Bad y Better Call Saul. Se trata de un empresario chileno-estadounidense y un importante distribuidor de narcóticos en el suroeste de los Estados Unidos que usa varios negocios legítimos, incluida una cadena de exitosos restaurantes de pollo frito llamada Los Pollos Hermanos y una instalación de lavandería industrial llamada Lavandería Brillante como fachada para lavar dinero para una gran operación de drogas.</p><p>Aunque en apariencia trabaja con el cartel mexicano para distribuir cocaína, en secreto planea vengarse de sus miembros por la muerte de su socio comercial y mejor amigo Maximino "Max" Arciniega a manos de Héctor Salamanca, el patriarca del narcotráfico respaldado por el cartel. en el suroeste. Para independizarse de la cocaína del cartel, construye un laboratorio secreto debajo de la lavandería industrial para fabricar metanfetamina.</p><p>Fring fue creado como un personaje para reemplazar al de Tuco Salamanca (Raymond Cruz) durante la segunda temporada. Gus, como un hombre de negocios estoico, fue creado para ser opuesto al caótico Tuco y actuar como contraste con Walter White.</p><p>Por su interpretación de Gus Fring, Esposito fue nominado para los Premios Primetime Emmy por Mejor Actor de Reparto en una Serie Dramática para la 64.ª edición de los galardones. La revista TV Guide colocó al personaje en el puesto n.º 3 en su lista de 2013 de los 60 mejores villanos de todos los tiempos.</p>'}

];

// Preparamos la lista de los personajes si estamos en la página categoría
if (document.getElementsByClassName('personajes').length !== 0) {
    document.getElementsByClassName('personajes')[0].innerText = "";
    personajes.forEach((personaje) => {
        let personajeItem = document.createElement('div');
        personajeItem.setAttribute('class', 'personaje');
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', `grid-item ${personaje.aspecto}`);
        gridItem.style.backgroundImage = `url('./${personaje.imagen}')`;
        let personajeLink = document.createElement('a');
        personajeLink.setAttribute('href', `detalle.html?personaje=${personaje.url}`);
        personajeLink.innerText = personaje.nombre;
        personajeItem.appendChild(personajeLink);
        gridItem.appendChild(personajeItem);
        document.getElementsByClassName('personajes')[0].append(gridItem);
    });
}

// Configuramos el slider de imagenes, que hemos instalado con el módulo splidejs y que se encuentra en la página de presentación
if (document.getElementsByClassName('splide').length !== 0) {
    new Splide( '.splide', {
        type   : 'slide',
        arrows: false,
        drag: true,
        autoplay: true,
        pause: false
    }).mount();
}

const url = new URL(window.location.href);
// Miramos si en la URL actual existe el parámetro "personaje", que nos indica que nos encontramos en la página de detalle
if (url.searchParams.has('personaje')) {
    // Pintamos los campos personalizables de la página de detalle
    let personaje = personajes.find(personaje => personaje.url === url.searchParams.get('personaje'));
    let figureFicha = document.createElement('figure');
    let figcaptionFicha = document.createElement('figcaption');
    figcaptionFicha.innerText = personaje.nombre;
    let imagenFicha = document.createElement('img');
    imagenFicha.setAttribute('src', `./${personaje.imagenFicha}`);
    imagenFicha.setAttribute('alt', personaje.nombre);
    figureFicha.appendChild(imagenFicha);
    figureFicha.appendChild(figcaptionFicha);
    document.getElementsByClassName('imagen')[0].appendChild(figureFicha);
    document.getElementsByClassName('texto')[0].innerHTML=personaje.texto;
    document.getElementsByClassName('ficha')[0].innerHTML=personaje.ficha;
    document.getElementsByTagName('h1')[0].innerText=personaje.nombre;
    let contenidoIntro = document.getElementsByClassName('contenido')[0];
    contenidoIntro.innerText = contenidoIntro.innerText.replace('###', personaje.nombre); 
}