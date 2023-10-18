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
    { nombre : 'Walter White', url : 'walter', imagen : 'walter.jpg', imagenFicha : 'walter-ficha.jpg', aspecto : 'tall', ficha : '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Walter Hartwell White</li><li>Alias: Heisenberg</li><li>Fecha de nacimiento: <time datetime="1958-09-07">7 de Septiembre de 1958</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Profesor de química y Fabricante de metanfetamina</li><li>Pareja: Skyler White</li><li>Hijos: Walter White Jr. y Holly White</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Pilot» (2008)</li><li>Última aparición: «Felina» (2013)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Bryan Cranston</li><li>Doblador en España: Miguel Ayones</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Walter Hartwell White (apodado <strong>Heisenberg</strong>), es el personaje protagonista de la serie. El personaje es interpretado por el actor <strong>Bryan Cranston</strong>.</p><p>Es presentado como un químico graduado del Instituto de Tecnología de California, quien cofundó la empresa Gray Matter Technologies. Dejó Gray Matter abruptamente, vendiendo sus acciones por $5,000. Poco después, la compañía hizo una fortuna, en gran parte gracias a la investigación de Walt. Posteriormente, Walt se mudó a Albuquerque, Nuevo México, donde se convirtió en profesor de química en la escuela secundaria. En su 50 cumpleaños, se le diagnostica cáncer de pulmón en estadio IIIA. Después de este descubrimiento, Walt recurre a la fabricación y venta de metanfetamina con un exalumno suyo, <a href="detalle-personaje.html?personaje=jesse">Jesse Pinkman</a> (Aaron Paul), para garantizar la seguridad económica de su familia después de su muerte. Se sumerge cada vez más en el tráfico de drogas ilícitas, volviéndose más despiadado a medida que avanza la serie, y luego adopta el alias "Heisenberg", que se vuelve reconocible como una figura clave en el tráfico de drogas del suroeste.</p><p>Tanto el personaje como la actuación de Cranston han recibido elogios de la crítica y White se menciona con frecuencia como uno de los personajes televisivos más grandes e icónicos de todos los tiempos. Cranston ganó cuatro premios Emmy como actor principal destacado en una serie dramática, tres de ellos consecutivos. Es el primer actor en ganar un Critics Choice, Golden Globe, Primetime Emmy y Screen Actors Guild Award por su actuación. Cranston repitió el papel de Walt en un flashback de la secuela de Breaking Bad, El Camino, y lo repitió de nuevo en la sexta y última temporada de la serie precuela Better Call Saul.</p>'},
    { nombre : 'Skyler White', url : 'skyler', imagen : 'skyler.jpg', imagenFicha : 'skyler-ficha.jpg', aspecto : 'tall', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Skyler Lambert</li><li>Alias: Sky</li><li>Fecha de nacimiento: <time datetime="1970-11-08">8 de Noviembre de 1970</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Escritora de cuentos cortos, Contadora, Gerente de lavado de autos y Despachadora de taxis</li><li>Hijos: Walter White Jr. y Holly White</li><li>Pareja: Walter White</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Pilot» (2008)</li><li>Última aparición: «Felina» (2013)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Anna Gunn</li><li>Doblador en España: Ana Maria Marí</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Skyler White (de soltera Lambert) es la tritagonista de Breaking Bad. Es presentada como la esposa del protagonista <a href="detalle-personaje.html?personaje=walter">Walter White</a>, que al sospechar y descubrir su doble vida como capo de la droga, trata de proteger a su familia de su lenta y oscura transformación, aunque en momentos, lo ayuda a expandir sus negocios. Por su actuación, Gunn recibió elogios de la crítica, y algunos críticos incluso elogiaron su personaje como modelo para las antiheroínas televisivas. </p><p>A lo largo de los años, Skyler ha tenido varias fuentes de ingresos escasas: trabajando como contable para la firma Beneke Fabricators de Albuquerque, escribiendo cuentos y vendiendo artículos en eBay. Ella y su esposo, Walter White (Bryan Cranston), tienen un hijo, Walt Jr. (RJ Mitte), que tiene parálisis cerebral, y una pequeña hija que nace en los eventos de la serie, Holly (Elanor Anne Wenrich). Su hermana, Marie (Betsy Brandt), está casada con un agente de la DEA, Hank Schrader (Dean Norris). Skyler es 12 años menor que Walt, a quien conoció cuando era anfitriona en un restaurante cerca del antiguo lugar de trabajo de Walt, cerca del Laboratorio Nacional de Los Álamos. </p>'},
    { nombre : 'Jesse Pinkman', url : 'jesse', imagen : 'jesse.jpg', imagenFicha : 'jesse-ficha.jpg', aspecto : 'tall', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Jesse Bruce Pinkman</li><li>Alias: Jesse</li><li>Fecha de nacimiento: <time datetime="1984-09-24">24 de Septiembre de 1984</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Traficante de metanfetamina</li><li>Padres: Adam Pinkman y Señora Pinkman</li><li>Pareja(s): Jane Margolis [Fallecida] y Andrea Cantillo [Fallecida]</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Pilot» (2008)</li><li>Última aparición: «Felina» (2013)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Aaron Paul</li><li>Doblador en España: Alejandro Martínez</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Jesse Bruce Pinkman es uno de los personajes principales de la serie, interpretado por <strong>Aaron Paul</strong>. Jesse es un traficante de metanfetaminas exalumno del protagonista de la serie, <a href="detalle-personaje.html?personaje=walter">Walter White</a>, quien se convierte en su socio, ayudándolo a ganar dinero para dejarlo a su familia antes que muera por su cáncer de pulmón.</p><p>Jesse es el único personaje además de Walt que aparece en todos los episodios del programa. Paul repitió el papel para la película derivada de 2019 El Camino: A Breaking Bad Movie, una secuela de la serie ambientada después de su final, y nuevamente en 2022 para la sexta y última temporada de la serie precuela Better Call Saul, siendo uno de los pocos personajes que aparecen tanto en los programas como en la película.</p><p>A pesar de los planes para matar al personaje al final de la primera temporada, la actuación de Paul convenció al productor ejecutivo y escritor principal Vince Gilligan de mantener a Jesse en el programa. El personaje y la actuación de Paul han recibido elogios de la crítica y los fanes. Los críticos elogiaron especialmente el desarrollo del personaje de Jesse de un traficante de drogas antipático a la brújula moral del programa a medida que se vuelve cada vez más culpable y arrepentido por sus acciones y las de Walter White mientras estaba involucrado en el tráfico de drogas.</p><p>Por su interpretación, Paul ganó el Premio Primetime Emmy como Mejor Actor de Reparto en una Serie Dramática en 2010, 2012 y 2014, convirtiéndolo en el primer actor en ganar la categoría tres veces desde su separación en drama y comedia.</p>'},
    { nombre : 'Gus Fring', url : 'gus', imagen : 'gus.jpg', imagenFicha : 'gus-ficha.jpg', aspecto : 'tall', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Gustavo Fring</li><li>Alias: Gus</li><li>Fecha de nacimiento: <time datetime="1958">1958</time></li><li>Nacionalidad: Chileno</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Cofundador de Los Pollos Hermanos y Asociado del cartel de Juárez</li><li>Padres: Se desconocen</li><li>Pareja: No tiene</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Mandala» (2009)</li><li>Última aparición: «Face off» (2011)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Giancarlo Esposito</li><li>Doblador en España: Manuel Bellido</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Gustavo "Gus" Fring es un personaje de las series de televisión dramáticas estadounidenses Breaking Bad y Better Call Saul. Se trata de un empresario chileno-estadounidense y un importante distribuidor de narcóticos en el suroeste de los Estados Unidos que usa varios negocios legítimos, incluida una cadena de exitosos restaurantes de pollo frito llamada Los Pollos Hermanos y una instalación de lavandería industrial llamada Lavandería Brillante como fachada para lavar dinero para una gran operación de drogas.</p><p>Aunque en apariencia trabaja con el cartel mexicano para distribuir cocaína, en secreto planea vengarse de sus miembros por la muerte de su socio comercial y mejor amigo Maximino "Max" Arciniega a manos de Héctor Salamanca, el patriarca del narcotráfico respaldado por el cartel. en el suroeste. Para independizarse de la cocaína del cartel, construye un laboratorio secreto debajo de la lavandería industrial para fabricar metanfetamina.</p><p>Fring fue creado como un personaje para reemplazar al de Tuco Salamanca (Raymond Cruz) durante la segunda temporada. Gus, como un hombre de negocios estoico, fue creado para ser opuesto al caótico Tuco y actuar como contraste con Walter White.</p><p>Por su interpretación de Gus Fring, Esposito fue nominado para los Premios Primetime Emmy por Mejor Actor de Reparto en una Serie Dramática para la 64.ª edición de los galardones. La revista TV Guide colocó al personaje en el puesto n.º 3 en su lista de 2013 de los 60 mejores villanos de todos los tiempos.</p>'},
    { nombre : 'Saul Goodman', url : 'saul', imagen : 'saul.jpg', imagenFicha : 'saul-ficha.jpg', aspecto : 'tall', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: James Morgan McGill</li><li>Alias: Saul Goodman</li><li>Fecha de nacimiento: <time datetime="1960-11-12">12 de Noviembre de 1960</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Abogado y Gerente de tienda de teléfonos</li><li>Padres: Charles McGill Sr. y Ruth McGill</li><li>Pareja: Kim Wexler (Divorciado)</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Better call Saul» (2009)</li><li>Última aparición: «Granite State» (2013)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Bob Odenkirk</li><li>Doblador en España: Paco Vaquero</li></ul>', texto : '<h2>Resumen del personaje</h2><p>James Morgan "Jimmy" McGill, más conocido por su nombre comercial Saul Goodman, aparece por primera vez como un personaje principal en Breaking Bad (2008-2013) y más tarde como el protagonista antihéroe titular de su spin-off Better Call Saul (2015-2022).</p><p>Saul es presentado como un abogado egocéntrico y sin escrúpulos que vive en Albuquerque, Nuevo México y adoptando sus tácticas como ex estafador, se involucra en el inframundo criminal de la ciudad. En Breaking Bad, actúa como consejero de los cocineros de metanfetaminas <a href="detalle-personaje.html?personaje=walter">Walter White</a> (Bryan Cranston) y <a href="detalle-personaje.html?personaje=jesse">Jesse Pinkman</a> (Aaron Paul) y desempeña un papel crucial en el desarrollo y crecimiento de su imperio de las drogas. La historia principal de su precuela Better Call Saul describe los orígenes de Saul como el serio abogado Jimmy McGill y su declive moral en los seis años previos a los eventos de Breaking Bad; también presenta una historia secuela, donde Saul vive bajo el nombre falso de Gene Takavic, explorando las consecuencias de sus acciones en Breaking Bad. </p><p>Saul apareció por primera vez en "Better Call Saul" (2009), el octavo episodio de la segunda temporada de Breaking Bad. Fue creado para proporcionar a Walt y Jesse una guía para sus actividades delictivas y para reemplazar a Hank Schrader (Dean Norris) como el alivio cómico de la serie. Su nombre, "Saul Goodman", es un juego de palabras con la frase "its all good, man" (todo está bien, hombre en español). Aunque Odenkirk fue elegido inicialmente para solo cuatro episodios como actor invitado, se convirtió en una parte integral de la narrativa de Breaking Bad después de que Gilligan y Gould quedaron impresionados por su actuación; Posteriormente, Odenkirk se unió al elenco principal en la tercera temporada y permaneció hasta la quinta y última temporada del programa. Tras la conclusión de Breaking Bad, Gilligan y Gould comenzaron a desarrollar un spin-off centrado en Saul que representa su historia de origen.</p>'},
    { nombre : 'Jane Margolis', url : 'jane', imagen : 'jane.jpg', imagenFicha : 'jane-ficha.jpg', aspecto : '', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Jane Margolis</li><li>Alias: Chica disculpas</li><li>Fecha de nacimiento: Desconocida</li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Diseñadora de tatuajes y casera</li><li>Padre: Donald Margolis</li><li>Pareja: Jesse Pinkman</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Breakage» (2009)</li><li>Última aparición: «Abiquiú» (2010)</li><li>Creado por:	Vince Gilligan</li><li>Interpretado por: Krysten Ritter</li><li>Doblador en España: Beatriz Berciano</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Jane Margolis es la vecina, casera y novia de <a href="detalle-personaje.html?personaje=jesse">Jesse Pinkman</a>. Se dedica a diseñar tatuajes y además está en rehabilitación debido al uso de drogas. A pesar de parecer huraña al principio, pronto se aproxima a Jesse y ambos se convierten en pareja, algo que tiene que esconder de su padre, Donald, el dueño de las casas donde ambos vivían.</p><p>Jane es una joven mujer que vive sola, se encuentra en rehabilitación por adicción a las drogas, asiste a las reuniones de rehabilitación junto con su padre Donald Margolis, mediante eso se mantiene limpia durante 18 meses, hasta que el destino la une a Jesse, quien busca una casa para rentar. Jesse ve la casa de Jane como muy confortable y buena, entonces hace el trato con ella y quedan de acuerdo en que él viviría ahí pero con muchas reglas, como no fumar, no drogarse, no música fuerte, etc. Jesse ve a Jane como una joven muy atractiva, entonces busca la forma de llamar su atención, hasta que lo consigue comprándose un televisor LCD y la invita a pasar a verlo. Así entablan una forma de contacto cercano, conversan y se conocen más.</p><p>La unión entre Jesse y Jane desata una fuerte influencia negativa en la rehabilitación de Jane, lo que la lleva a drogarse de nuevo con heroína, y consecuentemente a la muerte. Jane fallece por una sobredosis de speedball, una combinación entre heroína y crack, ahogada en su propio vómito; la cual Walter pudo haber detenido pero no lo hizo ya que Jane era un obstáculo para su negocio con Jesse.</p><p>La muerte de Jane tuvo repercusiones significativas, y es en gran parte responsable de la caída depresiva de Jesse. Walt también expresa su culpa por su inacción hacia Jane a Jesse, y cuestiona la improbabilidad estadística de conocerla y haber hablado con su padre la misma noche que ella murió, a pesar de nunca haberla conocido de antemano.</p>'},
    { nombre : 'Hank Schrader', url : 'hank', imagen : 'hank.jpg', imagenFicha : 'hank-ficha.jpg', aspecto : '', ficha: '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Henry R. Schrader</li><li>Alias: Hank</li><li>Fecha de nacimiento: <time datetime="1966-03">Marzo de 1966</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Agente de la DEA</li><li>Pareja: Marie Schrader</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Pilot» (2008)</li><li>Última aparición: «Ozymandias» (2013)</li><li>Creado por: Vince Gilligan</li><li>Interpretado por: Dean Norris</li><li>Doblador en España: Carlos Ysbert</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Henry R. "Hank" Schrader aparece en la práctica totalidad de la serie. Es interpretado por Dean Norris. Es presentado como agente de la DEA y cuñado del protagonista <a href="detalle-personaje.html?personaje=walter">Walter White</a> que sigue poco a poco las pistas de un narcotraficante conocido como "Heisemberg". El desarrollo del personaje de Hank a lo largo de la serie y la actuación de Norris han sido aclamados por la crítica.</p><p>Henry R. Schrader1​ es el cuñado del protagonista Walter White, y es un agente de la Administración de Control de Drogas (DEA) en Albuquerque, Nuevo México. A lo largo de la serie, dirige la investigación sobre las operaciones del cocinero de metanfetamina "Heisenberg", sin saber que el escurridizo capo de la droga es su propio cuñado. Hank también se enfrenta a numerosas amenazas de los cárteles de la droga rivales que van afectando su salud mental a medida que avanza la serie y, finalmente, comienza a tomar medidas más extremas para encontrar a "Heisenberg" y arrestarlo.</p><p>Hank era un agente especial de la DEA, donde ascendió de rango hasta convertirse en el supervisor de todas las investigaciones manejadas por su oficina de Albuquerque, bajo la atenta mirada de ASAC George Merkert (Michael Shamus Wiles) y SAC Ramey. Está casado con Marie (Betsy Brandt), con quien no tiene hijos. Es cercano a su familia por matrimonio, los White: Walt, su esposa (y hermana de Marie) Skyler (Anna Gunn) y su hijo Walter Jr. (RJ Mitte). En contraste con el apacible Walt, Hank es extrovertido, ambicioso y aparentemente intrépido y ansioso por emprender investigaciones peligrosas para avanzar en su carrera. Sin embargo, debajo de su exterior duro e imperturbable, lucha con algunas de sus propias vulnerabilidades: tenía los pies fríos cuando se trataba de casarse con Marie y, a pesar de su ambición, tiene miedo de salir de su zona de confort en el trabajo, principalmente debido a los efectos del PTSD que comienza a sufrir desde el asesinato de Tuco Salamanca y encuentros sangrientos posteriores durante redadas de drogas en su labor en El Paso.</p><p>Como pasatiempo, Hank elabora en casa su propia cerveza, que embotella con el nombre de "Schraderbräu". Después de que los primos de Tuco le disparan a quemarropa y para lidiar con su recuperación, pasa parte de la temporada 4 dedicándose a la recolección de minerales, para disgusto de Marie.</p>'},
    { nombre : 'Mike Ehrmantraut', url : 'mike', imagen : 'mike.jpg', imagenFicha : 'mike-ficha.jpg', aspecto : '', ficha : '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Michael Ehrmantraut</li><li>Alias: Mike</li><li>Fecha de nacimiento: <time datetime="1944">1944</time></li><li>Nacionalidad: Estadounidense</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Oficial del Cuerpo de Marines, Oficial de policía, Limpiador, Jefe de seguridad de Los Pollos Corporate, Sicario, Investigador privado, Asistente de estacionamiento con SMQ Parking en el juzgado de Albuquerque y Consultor de seguridad en Madrigal Electromotive</li><li>Hijos: Matt Ehrmantraut</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «ABQ» (2009)</li><li>Última aparición: «El camino» (2019)</li><li>Creado por: Vince Gilligan</li><li>Interpretado por: Jonathan Banks</li><li>Doblador en España: Julio Sanchidrián</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Mike es presentado en Breaking Bad como un ex oficial de policía de Filadelfia y veterano del Cuerpo de Marines de los Estados Unidos que trabaja para el capo de la droga <a href="detalle-personaje.html?personaje=gus">Gus Fring</a> —y, en ocasiones, para el abogado <a href="detalle-personaje.html?personaje=saul">Saul Googman</a>— como investigador privado, jefe de seguridad, limpiador y sicario. Mike como personaje ha sido elogiado por la crítica y convirtiéndose en favorito del público; la actuación de Banks ha recibido varios premios de actuación y nominaciones.</p><p>Según Banks, Mike es un veterano de la Infantería de Marina que sirvió en la Guerra de Vietnam.8​ El servicio militar de Mike está implícito en el episodio de la segunda temporada de Better Call Saul, "Gloves Off", cuando menciona su familiaridad con un rifle de francotirador del mercado negro que tiene la intención de comprar. Posteriormente se convirtió en oficial del Departamento de Policía de Filadelfia. Mike tuvo un hijo, Matt, que también se convirtió en policía. Matt se casó con Stacey y tuvieron una hija, Kaylee. En un flashback extendido en el episodio "Five-O" de Better Call Saul, se revela que Mike fue un oficial de policía corrupto que aceptó sobornos (más tarde se revela que estos comenzaron en 1984). Para diciembre de 2001, otros oficiales corruptos se acercaron a Matt y le pidieron consejo a Mike; Mike le aconsejó a Matt que no tomar el dinero lo etiquetaría como un denunciante y pondría en peligro su vida y la de su familia, así que Matt lo tomó. El socio de Matt y otro oficial lo mataron de todos modos porque su vacilación les hizo pensar que podría entregarlos. Stacey y Kaylee se fueron de Filadelfia a Albuquerque después del funeral de Matt. Mike identificó a los oficiales que lo mataron y organizó una emboscada para matarlos a ambos, después de lo cual se fue a Albuquerque, para ver y estar cerca de Stacey y Kaylee.</p>'},
    { nombre : 'Hector Salamanca', url : 'hector', imagen : 'hector.jpg', imagenFicha : 'hector-ficha.jpg', aspecto : '', ficha : '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Hector Salamanca</li><li>Alias: Tío, "Don" Salamanca</li><li>Fecha de nacimiento: Desconocida</li><li>Nacionalidad: Mejicano</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Ex-capo del Cártel de Juárez</li><li>Sobrinos: Tuco Salamanca, Leonel Salamanca, Marco Salamanca y Lalo Salamanca</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Grilled» (2009)</li><li>Última aparición: «Face off» (2011)</li><li>Creado por: Vince Gilligan</li><li>Interpretado por: Mark Margolis</li><li>Doblador en España: Vicente Gil</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Hector Salamanca era un miembro de alto rango del Cártel de Juárez y fue referido, aun en su enfermedad, como "Don Salamanca" de líderes de los carteles contemporáneos como Juan Bolsa. Él fue y es el más temido de los Dons y fue el patriarca de la familia Salamanca, siendo el tío de Tuco, Leonel y Marco Salamanca. Cuando Leonel y Marco eran niños, Hector les enseñó lecciones de vida brutales como el casi ahogamiento de Marco frente a su hermano después de que este le hubiese deseado la muerte con la lección de vida "que la familia lo era todo".</p><p>Él trabajaba para Don Eladio en el momento en el que <a href="detalle-personaje.html?personaje=gus">Gus Fring</a> hizo una obertura hacia el cartel. Poco antes de que casi de ahogar a su sobrino Marco, el tío estaba discutiendo por teléfono sobre cómo el cartel debe tratar con Gus, quien menospreció al joven Gus como el "Hombre Pollo", cuando advirtió: "Nunca confíes en alguien del Estado de América del Sur."</p>'},
    { nombre : 'Tuco Salamanca', url : 'tuco', imagen : 'tuco.jpg', imagenFicha : 'tuco-ficha.jpg', aspecto : '', ficha : '<h2>Información personal</h2><ul><li>Nombre de nacimiento: Tuco Salamanca</li><li>Alias: Tuco</li><li>Fecha de nacimiento: <time datetime="1970">1970</time></li><li>Nacionalidad: Mejicano</li></ul><h2>Información profesional y familiar</h2><ul><li>Ocupación: Traficante de metanfetamina</li><li>Primos: Joaquín Salamanca, Leonel Salamanca y Marco Salamanca</li></ul><h2>Otros datos de interés</h2><ul><li>Primera aparición: «Crazy Handful of Nothin» (2008)</li><li>Última aparición: «Grilled» (2009)</li><li>Creado por: Vince Gilligan</li><li>Interpretado por: Raymond Cruz</li><li>Doblador en España: Roberto Encinas</li></ul>', texto : '<h2>Resumen del personaje</h2><p>Tuco Salamanca es un narcotraficante mexicano radicado en Albuquerque. Se caracteriza por tenerle mucho respeto a <a href="detalle-personaje.html?personaje=walter">Walter White</a> (Bryan Cranston) pero, a la vez, siente repudio por <a href="detalle-personaje.html?personaje=jesse">Jesse Pinkman</a> (Aaron Paul), a quien agrede e intenta asesinar en reiteradas ocasiones.</p><p>Con el objetivo de conseguir un nuevo distribuidor de su droga (metanfetamina), Walter y Jesse acuden a él. Ambos descubren inmediatamente que Tuco es una persona impredecible, brutalmente violenta y adicta a la metanfetamina.</p><p>Tras una serie de sucesos, incluido un ataque de Tuco a Jesse (quien termina en un hospital con fracturas), tanto Tuco como Walter y Jesse finalmente llegan a un acuerdo para hacer negocio con las metanfetaminas producidas.</p>'},

];

// Preparamos la lista de los personajes si estamos en la página categoría personajes
if (document.getElementsByClassName('personajes').length !== 0) {
    document.getElementsByClassName('personajes')[0].innerText = "";
    personajes.forEach((personaje) => {
        let personajeItem = document.createElement('div');
        personajeItem.setAttribute('class', 'personaje');
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', `grid-item ${personaje.aspecto}`);
        gridItem.style.backgroundImage = `url('./personajes/${personaje.imagen}')`;
        let personajeLink = document.createElement('a');
        personajeLink.setAttribute('href', `detalle-personaje.html?personaje=${personaje.url}`);
        personajeLink.innerText = personaje.nombre;
        personajeItem.appendChild(personajeLink);
        gridItem.appendChild(personajeItem);
        document.getElementsByClassName('personajes')[0].append(gridItem);
    });
}

// Temporadas de la serie
const temporadas = [
    { nombre : 'Temporada 1', url : 'temporada1', imagen : 'temporada1.jpg', trailer : 'https://www.youtube.com/watch?v=HhesaQXLuRY', aspecto : 'tall', ficha : '<h2>Información de la temporada</h2><ul><li>Fecha de lanzamiento: <time datetime="2008-01-20">20 de Enero de 2008</time></li><li>Fecha de finalización: <time datetime="2008-03-09">9 de Marzo de 2008</time></li><li>Número de capítulos: 7 episodios</li><li>Medio de difusión: AMC</li></ul><h2>Capítulos</h2><ul><li>Pilot (Principio del fin)</li><li>Cats in the Bag... (El gato en la bolsa)</li><li>..And the Bags in the River (Y la bolsa en el río)</li><li>Cancer Man (Cáncer)</li><li>Gray Matter (Materia gris)</li><li>Crazy Handful of Nothin (Un loco puñado de nada)</li><li>A No-Rough-Stuff-Type Deal (Acuerdo no violento)</li></ul>', texto : '<h2>Resumen de la temporada</h2><p><a href="detalle-personaje.html?personaje=walter">Walter White</a> (Bryan Cranston) vive una ordinaria vida siendo profesor de química en un instituto y viviendo con su mujer embarazada, <a href="detalle-personaje.html?personaje=skyler">Skyler</a> (Anna Gunn) y su hijo Walter Jr. (RJ Mitte), que tiene parálisis cerebral. La historia empieza en el cumpleaños de 50 años de Walter. Su vida se vuelve complicada ya que pocos días después descubre que tiene cáncer de pulmón terminal en un estado avanzado. Walt decide entrar en el mundo del tráfico de drogas para conseguir una buena cantidad de dinero que garantice la manutención de su familia antes de morir. Utilizando sus conocimientos de química, logra cocinar metanfetamina de extrema calidad asociándose con uno de sus ex-alumnos, <a href="detalle-personaje.html?personaje=jesse">Jesse Pinkman</a> (Aaron Paul).</p><p>Ambos tratan de hacer negocios con un distribuidor de drogas local, Krazy-8 (Max Arciniega), que acaba creyendo que Walter es un policía encubierto e intenta asesinarle. Walter y Jesse logran defenderse secuestrando y asesinando a Krazy-8 y a su cómplice. Bastante afectado por lo ocurrido, Walt rompe sus lazos con Jesse y finalmente confiesa a su familia que tiene cáncer. La familia discute varios planes a largo plazo para poder combatir con la enfermedad. En principio, Walter piensa en no tratarse para no sufrir los efectos secundarios de la quimioterapia, pero los demás acaban convenciéndole para que haga el tratamiento.</p><p>El cuñado de Walt, <a href="detalle-personaje.html?personaje=hank">Hank</a> (Dean Norris), que es un agente de la DEA, le ofrece ayuda financiera para poder cubrir el tratamiento y también le ofrece ayuda su adinerado amigo Elliott (Adam Godley), pero Walter rechaza ambas ofertas. En vez de eso, decide volver a fabricar metanfetamina y miente a su familia diciendo que es Elliott el que está pagando su quimioterapia. Walter y Jesse deciden intentar hacer negocios con <a href="detalle-personaje.html?personaje=tuco">Tuco</a> (Raymond Cruz), un influyente y violento distribuidor de drogas. Ambos consiguen robar un gran barril de metilamina, lo cual les permite producir grandes cantidades de cristal azul para Tuco. Walter acepta su nuevo estilo de vida como traficante de drogas creando el seudónimo "Heisenberg" para proteger su identidad.</p>'},
 
];

// Preparamos la lista de las temporadas si estamos en la página categoría temporadas
if (document.getElementsByClassName('temporadas').length !== 0) {
    document.getElementsByClassName('temporadas')[0].innerText = "";
    temporadas.forEach((temporada) => {
        let temporadaItem = document.createElement('div');
        temporadaItem.setAttribute('class', 'temporada');
        let gridItem = document.createElement('div');
        gridItem.setAttribute('class', `grid-item ${temporada.aspecto}`);
        gridItem.style.backgroundImage = `url('./temporadas/${temporada.imagen}')`;
        let temporadaLink = document.createElement('a');
        temporadaLink.setAttribute('href', `detalle-temporada.html?temporada=${temporada.url}`);
        temporadaLink.innerText = temporada.nombre;
        temporadaItem.appendChild(temporadaLink);
        gridItem.appendChild(temporadaItem);
        document.getElementsByClassName('temporadas')[0].append(gridItem);
    });
}

// Configuramos el slider de imagenes, que hemos instalado con el módulo splidejs y que se encuentra en la página de presentación
if (document.getElementsByClassName('splide').length !== 0) {
    new Splide( '.splide', {
        type   : 'loop',
        arrows: false,
        drag: true,
        autoplay: true,
        pause: false
    }).mount();
}

const url = new URL(window.location.href);
// Miramos si en la URL actual existe el parámetro "personaje", que nos indica que nos encontramos en la página de detalle personaje
if (url.searchParams.has('personaje')) {
    // Pintamos los campos personalizables de la página de detalle
    let personaje = personajes.find(personaje => personaje.url === url.searchParams.get('personaje'));
    let figureFicha = document.createElement('figure');
    let figcaptionFicha = document.createElement('figcaption');
    figcaptionFicha.innerText = personaje.nombre;
    let imagenFicha = document.createElement('img');
    imagenFicha.setAttribute('src', `./personajes/${personaje.imagenFicha}`);
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

// Miramos si en la URL actual existe el parámetro "temporada", que nos indica que nos encontramos en la página de detalle temporada
if (url.searchParams.has('temporada')) {
    // Pintamos los campos personalizables de la página de detalle
    let temporada = temporadas.find(temporada => temporada.url === url.searchParams.get('temporada'));
    let figureTrailer = document.getElementById('trailer');
    let figcaptionTrailer = figureTrailer.getElementsByTagName('figcaption')[0];
    let iframeTrailer = figureTrailer.getElementsByTagName('iframe')[0];
    figcaptionTrailer.innerText = figcaptionTrailer.innerText.replace('###', temporada.nombre);
    iframeTrailer.setAttribute('src', temporada.trailer);
    document.getElementsByClassName('texto')[0].innerHTML=temporada.texto;
    document.getElementsByClassName('ficha')[0].innerHTML=temporada.ficha;
    document.getElementsByTagName('h1')[0].innerText=temporada.nombre;
    let contenidoIntro = document.getElementsByClassName('contenido')[0];
    contenidoIntro.innerText = contenidoIntro.innerText.replace('###', temporada.nombre); 
}