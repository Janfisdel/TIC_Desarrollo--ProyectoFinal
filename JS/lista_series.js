let series = [
  {
    id: 1,
    nombre: "This is us",
    categoria: "Drama",
    temporadas: 6,
    descripcion:
      "Jack y Rebecca Pearson son un matrimonio a punto de tener trillizos. Kevin es un actor de moda que atraviesa una crisis personal. Kate es una chica obsesionada con adelgazar. Por su parte, Randall ha encontrado lo que llevaba buscando desde hacía mucho tiempo: a su padre biológico. La pregunta es: ¿qué tienen en común estos cinco personajes?",
    calificacion: 8.6,
    actores:
      "Milo Ventimiglia, Mandy Moore, Sterlin K. Brown, Justin Hartley, Chrissy Metz",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641572325/Mujeres%20TIC/plataformas/Star__logo_ok4zpc.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641909639/Mujeres%20TIC/Series/this_is_us_imhlmv.jpg",
  },
  {
    id: 2,
    nombre: "Grey´s Anatomy",
    categoria: "Drama",
    temporadas: 18,
    descripcion:
      "Serie que cuenta los amores y adversidades que atraviesan un grupo de internos de cirugía en Seattle y sus supervisores.",
    calificacion: 7.5,
    actores: "Ellen Pompeo, Patrick Dempsey, Justin Chambers, Chandra Wilson",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573348/Mujeres%20TIC/plataformas/Amazon_Prime_Video_logo_f9fnde.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417330/Mujeres%20TIC/Series/greys_anatomy_tjsgax.jpg",
  },
  {
    id: 3,
    nombre: "La casa de papel",
    categoria: "Drama",
    temporadas: 5,
    descripcion:
      "Un inusual grupo de ladrones intenta llevar a cabo el robo más perfecto de la historia de España: robar 2.400 millones de euros de la Real Casa de la Moneda de España.",
    calificacion: 8.2,
    actores: "Ursula Corberó, Alvaro Morte, Pedro Alonso, Itziar Ituño",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573255/Mujeres%20TIC/plataformas/Netflix_2015_logo_a6vgnb.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417332/Mujeres%20TIC/Series/casa_papel_yzdosw.jpg",
  },

  {
    id: 4,
    nombre: "Mare of Easttown",
    categoria: "Policial",
    temporadas: 1,
    descripcion:
      "La detective de policía Mare Sheehan investiga el reciente asesinato de una madre adolescente mientras intenta evitar que su propia vida se desmorone. Mare es un héroe local, ya que fue la estrella de un juego de campeonato de baloncesto de la escuela secundaria hace 25 años. Tampoco ha podido resolver el caso de otra niña desaparecida durante un año, lo que ha llevado a muchos en la comunidad a dudar de sus habilidades de detective.",
    calificacion: 8.5,
    actores: "Kate Winslet, Jean Smart, Evan Peters, Guy Pearce",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573201/Mujeres%20TIC/plataformas/HBO_Max_Logo_okcip1.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911227/Mujeres%20TIC/Series/4948483_gerdpq.jpg",
  },
  {
    id: 5,
    nombre: "Love, Victor",
    categoria: "Romance",
    temporadas: 2,
    descripcion:
      "Sigue el viaje de autodescubrimiento de Victor, los desafíos que enfrenta en su hogar y la lucha con su orientación sexual. Se acerca a Simon cuando parece demasiado difícil para él navegar por la escuela secundaria.",
    calificacion: 8.1,
    actores:
      "Michael Cimino, Anthony Turpel, George Sear, Rachel Hilson, Nick Robinson ",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641572325/Mujeres%20TIC/plataformas/Star__logo_ok4zpc.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417329/Mujeres%20TIC/Series/victor_emsslq.jpg",
  },

  {
    id: 6,
    nombre: "WandaVision",
    categoria: "Ciencia ficción",
    temporadas: 1,
    descripcion:
      "Tres semanas después de los eventos de Avengers: Endgame, Wanda Maximoff y Vision viven una idílica vida suburbana en la ciudad de Westview, Nueva Jersey, tratando de ocultar su verdadera naturaleza. A medida que su entorno comienza a moverse a través de diferentes décadas y se encuentran con varios tropos televisivos, la pareja sospecha que las cosas no son lo que parecen.",
    calificacion: 8.0,
    actores: "Elizabeth Olsen, Paul Bettany, Kathryn Hahn",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573531/Mujeres%20TIC/plataformas/Disney__logo_okpcii.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641913876/Mujeres%20TIC/Series/primer-poster-e-imagenes-oficiales-de-WandaVision-2_dtrrrf.jpg",
  },

  {
    id: 7,
    nombre: "Hunters",
    categoria: "Drama",
    temporada: 1,
    descripcion:
      "En 1977, en la ciudad de Nueva York, un joven judío con problemas empeñado en vengarse es acogido por un grupo secreto de cazadores de nazis que luchan en una guerra clandestina contra la camarilla de altos funcionarios nazis escondidos que trabajan para crear el Cuarto Reich.",
    calificacion: 7.2,
    actores: "Al Pacino, Logan Lerman, Jerrika Hinton, Saul Rubinek, Lena Olin",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573348/Mujeres%20TIC/plataformas/Amazon_Prime_Video_logo_f9fnde.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911616/Mujeres%20TIC/Series/51ZkdJtqPLL._AC__xyjxk0.jpg",
  },
  {
    id: 6,
    nombre: "You",
    categoria: "Crimen",
    temporadas: 3,
    descripcion:
      "Un joven peligrosamente encantador, intensamente obsesivo, toma medidas extremas para insertarse en la vida de aquellos que lo atraviesan.",
    calificacion: 7.7,
    actores: "Penn Badgley, Elizabeth Lail, Victoria Pedretti",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573255/Mujeres%20TIC/plataformas/Netflix_2015_logo_a6vgnb.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417336/Mujeres%20TIC/Series/you_ac4tiq.png",
  },

  {
    id: 7,
    nombre: "Emily in Paris",
    categoria: "Comedia",
    temporadas: 2,
    descripcion:
      "Emily es una estadounidense veinteañera de Chicago que se muda a París en busca de una oportunidad laboral inesperada. Tiene la tarea de llevar un punto de vista estadounidense a una venerable empresa de marketing francesa. Las culturas chocan mientras se adapta a los desafíos de la vida en París mientras hace malabarismos con su carrera, nuevas amistades y su vida amorosa",
    calificacion: 6.9,
    actores:
      "Lily Collins, Philippine Leroy-Beaulieu, Lucas Bravo, Ashley Park",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573255/Mujeres%20TIC/plataformas/Netflix_2015_logo_a6vgnb.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417334/Mujeres%20TIC/Series/emily_paris_zicrha.jpg",
  },
  {
    id: 8,
    nombre: "Only murders in the building",
    categoria: "Comedia",
    temporadas: 1,
    descripcion:
      "Cuando se produce un escalofriante asesinato en un apartamento de Upper West Side, tres vecinos emplean sus conocimientos sobre crímenes para resolver lo. Para ello comienzan a grabar un podcast para documental el caso donde desentrañan los complejos secretos del edificio años atrás.",
    calificacion: 8.1,
    actores: "Steve Martin, Martin Short, Selena Gomez",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641572325/Mujeres%20TIC/plataformas/Star__logo_ok4zpc.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911298/Mujeres%20TIC/Series/lF4A6vdmNnK9XnI8OI60hHNb1rV_ypujb6.jpg",
  },
  {
    id: 9,
    nombre: "The Handmaid's tale",
    categoria: "Drama",
    temporadas: 4,
    descripcion:
      "June Osborne es una criada luego de la segunda guerra civil en EEUU, ahora denominada Republica de Gilead, un lugar con baja tasa de natalidad en donde las mujeres son estructuradas en castas y las pocas mujeres fértiles son utilizadas para tener los hijos de las familias poderosas.",
    calificacion: 8.4,
    actores: "Elisabeth Moss, Yvonne Strahovski, Joseph Fiennes, Ann Dowd",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641987507/Mujeres%20TIC/plataformas/paramount-plus-logo-4_lsinmj.png",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911570/Mujeres%20TIC/Series/44826268614_dc4ea51142_b_lmxbmc.jpg",
  },
  {
    id: 10,
    nombre: "Fleabag",
    categoria: "Comedia",
    temporadas: 2,
    descripcion:
      "Una joven que intenta hacer frente con humor a la vida en Londres mientras acepta las tragedias cotidianas.",
    calificacion: 8.7,
    actores: "Phoebe Waller-Bridge, Sian Clifford, Andrew Scott",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573348/Mujeres%20TIC/plataformas/Amazon_Prime_Video_logo_f9fnde.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417327/Mujeres%20TIC/Series/fleabag_ovoxu4.jpg",
  },
  {
    id: 11,
    nombre: "Lupin",
    categoria: "Policial",
    temporadas: 2,
    descripcion:
      "Inspirado por un libro sobre el caballero ladrón Arsène Lupin que su padre le había regalado en su cumpleaños, Assane se propone vengarse de la familia que incriminó a su padre, utilizando su carisma y dominio del robo, el subterfugio y el disfraz",
    calificacion: 7.5,
    actores: "Omar Sy, Ludivine Sagnier, Hervé Pierre, Soufiane Guerrab",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573255/Mujeres%20TIC/plataformas/Netflix_2015_logo_a6vgnb.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911358/Mujeres%20TIC/Series/5Hke4jkFgD0loC6QBY7ym235Hq_y5hbgj.jpg",
  },
  {
    id: 12,
    nombre: "Modern love",
    categoria: "Romance",
    temporadas: 2,
    descripcion:
      "Explora el amor en su multitud de formas, que incluyen el amor sexual, romántico, familiar, platónico y propio. Esta serie basada en la columna del mismo nombre del New York Times, adapta diferentes historias de amor que tienen lugar en la ciudad de Nueva York.",
    calificacion: 8.0,
    actores: "Anne Hathaway, Dev Patel, Tina Fey, Andrew Scott, Kit Harington",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573348/Mujeres%20TIC/plataformas/Amazon_Prime_Video_logo_f9fnde.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417333/Mujeres%20TIC/Series/modern_love_sg3qvi.jpg",
  },
  {
    id: 13,
    nombre: "Loki",
    categoria: "Ciencia ficción",
    temporadas: 1,
    descripcion:
      "Después de robar el Tesseract durante los eventos de Avengers: Endgame, una versión alternativa de Loki es llevada a la misteriosa TVA, una organización burocrática que existe fuera del tiempo y el espacio y monitorea la línea de tiempo. Le dan a Loki dos opciones: enfrentarse a ser borrado de la existencia debido a que es una variante de tiempo, o ayudar a arreglar la línea de tiempo y detener una amenaza mayor.",
    calificacion: 8.3,
    actores: "Tom Hiddleston, Owen Wilson, Gugu Mbatha-Raw, sofia di martino",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573531/Mujeres%20TIC/plataformas/Disney__logo_okpcii.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641917691/Mujeres%20TIC/Series/919TmI2t4BS._AC_SY679__gabt3p.jpg",
  },
  {
    id: 14,
    nombre: "Euphoria",
    categoria: "Drama",
    temporadas: 2,
    descripcion:
      "La serie sigue a un grupo de estudiantes de secundaria, que sumergidos en el fatídico mundo de las drogas, el sexo y la violencia tratan de luchar contra esos monstruos para enfrentarse a un nuevo futuro",
    calificacion: 8.4,
    actores: "Zendaya, Jacob Elordi, Hunter Schafer, Maude Apatow",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573201/Mujeres%20TIC/plataformas/HBO_Max_Logo_okcip1.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911156/Mujeres%20TIC/Series/A1jMsS3qUFL._AC_SY741__pr6tay.jpg",
  },
  {
    id: 15,
    nombre: "The Umbrella academy",
    categoria: "Ciencia ficción",
    temporadas: 2,
    descripcion:
      "Los hermanos Hargreeves se reúnen de nuevo con ocasión de la muerte de su padre. Allí se encontrarán con el regreso de Cinco, el mismo que desapareció en el tiempo cuando éste usó su poder para poder viajar en el tiempo en el futuro. Pero viene con un mensaje: se acerca el apocalipsis en una fecha en concreta y deben salvar al mundo.",
    calificacion: 8.0,
    actores:
      "Elliot Page, Tom Hooper, David Castañeda, Emmy Raver-Lampman, Robret Sheehan, Aidan Gallagher",
    plataforma:
      "https://res.cloudinary.com/janfis/image/upload/v1641573255/Mujeres%20TIC/plataformas/Netflix_2015_logo_a6vgnb.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911460/Mujeres%20TIC/Series/78128277c1328f2378b57aa274650004_cnruel.jpg",
  },
  {
    id: 16,
    nombre: "Dark",
    categoria: "Ciencia ficción",
    temporadas: 3,
    descripcion:
      "Ambientada en la Alemania contemporánea, la serie gira alrededor de la desaparición de dos niños en Widen. El pueblo se vuelca en buscarles hasta que la situación cada vez se convierte más en una experiencia sobrenatural. Parece ser que todo se relaciona con los inexplicables sucesos que ocurrieron en 1986.",
    calificacion: 8.8,
    actores: "Louis Hofmann, Karoline Eichhorn, Lisa Vicari, Andreas Pietschmann",
    plataforma: "https://res.cloudinary.com/janfis/image/upload/v1641573255/Mujeres%20TIC/plataformas/Netflix_2015_logo_a6vgnb.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641417354/Mujeres%20TIC/Series/dark_eq1c1g.jpg"
  },
  {
    id: 17,
    nombre: "The americans",
    categoria: "Drama",
    temporadas: 6,
    descripcion: "Dos espías soviéticos de la KGB han vivido los últimos quince años en las afueras de Washington D. C. como un supuesto matrimonio. Su relación comienza a complicarse a medida que se adentran a la vida estadounidense y sus operaciones secretas se ponen en riesgo con la llegada al vecindario de un agente del FBI especialista en contraespionaje.",
    calificacion: 8.4,
    actores: "Keri Russell, Matthew Rhys, Noah Emmerich",
    plataforma: "https://res.cloudinary.com/janfis/image/upload/v1641572325/Mujeres%20TIC/plataformas/Star__logo_ok4zpc.svg",
    img: "https://res.cloudinary.com/janfis/image/upload/v1641911660/Mujeres%20TIC/Series/711Pwg3pZsL._AC_SY679__oqfzqj.jpg"
  },
  {
    id: 18,
    nombre: "The boys",
    categoria: "Ciencia ficción",
    temporadas: 2,
    descripcion: "Ambientada en un universo en el que los individuos superpoderosos son reconocidos como héroes, la poderosa corporación Vought International los comercializa y monetiza. Fuera de sus personajes heroicos, la mayoría son arrogantes y corruptos. La serie se centra principalmente en dos grupos: los Siete, el principal equipo de superhéroes de VI y The Boys, los vigilantes que buscan derribar a Vought y a los superhéroes corruptos.",
    calificacion:8.7,
    actores:"Karl Urban, Jack Quaid, Antony Starr, Erin Moriarty",
    plataforma: "https://res.cloudinary.com/janfis/image/upload/v1641573348/Mujeres%20TIC/plataformas/Amazon_Prime_Video_logo_f9fnde.svg",
    img:"https://res.cloudinary.com/janfis/image/upload/v1641417330/Mujeres%20TIC/Series/boys_hrjntt.jpg"
  },
];

