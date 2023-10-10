
// Frases célebres
const frasesCelebres = ['Nunca cometas dos veces el mismo error', 'Tú conoces el negocio y yo conozco la química', 'Cállate y déjame morir en paz', 'Aléjate de mi territorio', 'Estoy en el negocio del imperio', 'Nunca le mientas a un mentiroso', '¿Desde cuándo los veganos comen pollo frito?', '¿Ese era tu Heisenberg?', 'Última oportunidad de mirarme, Héctor', '¿El alma? No hay nada aquí, solo química', 'Skyler, eres el amor de mi vida, sé que lo sabes', 'Es mi ropa buena, no puedo llegar a casa oliendo a droga', 'Esto es cristal puro… ¡Usted es un maldito artista!', 'Esto no es química, es arte', 'Si quiere cocinar cocine en su casa'];

// Cargamos una frase célebre aleatoria
let fraseCelebre = document.getElementById('frase-celebre');
if (fraseCelebre!==null) {
    fraseCelebre.innerText = frasesCelebres[(Math.floor(Math.random() * frasesCelebres.length))];
}
