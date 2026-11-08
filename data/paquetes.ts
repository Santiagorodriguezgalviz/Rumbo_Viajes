import type { Bilingue } from '@/lib/preferencias';

export type Region = 'Europa' | 'Caribe' | 'Sudamérica' | 'Asia' | 'Medio Oriente' | 'Norteamérica';

export const REGIONES: Region[] = [
  'Europa',
  'Caribe',
  'Sudamérica',
  'Asia',
  'Medio Oriente',
  'Norteamérica',
];

export const REGION_TEXTO: Record<Region, Bilingue> = {
  Europa: { es: 'Europa', en: 'Europe' },
  Caribe: { es: 'Caribe', en: 'Caribbean' },
  Sudamérica: { es: 'Sudamérica', en: 'South America' },
  Asia: { es: 'Asia', en: 'Asia' },
  'Medio Oriente': { es: 'Medio Oriente', en: 'Middle East' },
  Norteamérica: { es: 'Norteamérica', en: 'North America' },
};

export type Foto = { src: string; alt: Bilingue; fotografo: string };
export type Duracion = { dias: number; noches: number };
export type Precio = { valor: number; moneda: string };
export type DiaItinerario = { dia: number; titulo: Bilingue; descripcion: Bilingue };
export type Faq = { pregunta: Bilingue; respuesta: Bilingue };

export type Paquete = {
  slug: string;
  nombre: Bilingue;
  region: Region;
  pais: Bilingue;
  duracion: Duracion;
  resumen: Bilingue;
  descripcion: Bilingue[];
  itinerario: DiaItinerario[];
  incluye: Bilingue[];
  noIncluye: Bilingue[];
  imagen: Foto;
  galeria: Foto[];
  faqs: Faq[];
  precio?: Precio;
};

function foto(id: number, alt: Bilingue, fotografo: string): Foto {
  return {
    src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`,
    alt,
    fotografo,
  };
}

export const PAQUETES: Paquete[] = [
  {
    slug: 'paris',
    nombre: { es: 'París', en: 'Paris' },
    region: 'Europa',
    pais: { es: 'Francia', en: 'France' },
    duracion: { dias: 6, noches: 5 },
    resumen: {
      es: 'Cruceros por el Sena, museos con historia y la Torre Eiffel iluminada cada noche.',
      en: 'Seine cruises, world-class museums and the Eiffel Tower lit up every night.',
    },
    descripcion: [
      {
        es: 'París es de esas ciudades que enamoran desde el primer café. Este paquete une sus clásicos, como el Louvre, Notre-Dame y la Torre Eiffel, con barrios que se recorren a pie: Montmartre, el Marais y las orillas del Sena.',
        en: 'Paris is one of those cities that wins you over with the first coffee. This package combines its classics, like the Louvre, Notre-Dame and the Eiffel Tower, with neighborhoods best explored on foot: Montmartre, the Marais and the banks of the Seine.',
      },
      {
        es: 'Te alojas en hoteles céntricos, con metro a pocos minutos, y tienes tardes libres para caminar sin prisa, comprar o sentarte en una terraza. Es ideal si es tu primera vez en Europa o si quieres volver con calma.',
        en: 'You stay in central hotels, a few minutes from the metro, and have free afternoons to wander, shop or sit on a terrace. It is ideal if it is your first time in Europe or if you want to return at a slower pace.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada y primer paseo', en: 'Arrival and first stroll' }, descripcion: { es: 'Te recogemos en el aeropuerto y caminas por el Marais hasta la cena.', en: 'We pick you up at the airport and you walk through the Marais until dinner.' } },
      { dia: 2, titulo: { es: 'El Louvre y las Tullerías', en: 'The Louvre and the Tuileries' }, descripcion: { es: 'Visita guiada al Louvre por la mañana y tarde libre en los jardines de las Tullerías.', en: 'Guided morning visit to the Louvre and a free afternoon in the Tuileries Gardens.' } },
      { dia: 3, titulo: { es: 'Montmartre y Sacré-Cœur', en: 'Montmartre and Sacré-Cœur' }, descripcion: { es: 'Subida al barrio de los pintores, la basílica del Sacré-Cœur y cena frente a la plaza del Tertre.', en: 'Climb to the painters\u2019 hill, the Sacré-Cœur basilica and dinner facing Place du Tertre.' } },
      { dia: 4, titulo: { es: 'Torre Eiffel y crucero', en: 'Eiffel Tower and cruise' }, descripcion: { es: 'Ascenso a la Torre Eiffel y crucero nocturno por el río Sena.', en: 'Visit to the Eiffel Tower and a night cruise on the Seine.' } },
      { dia: 5, titulo: { es: 'Versalles o día libre', en: 'Versailles or a free day' }, descripcion: { es: 'Excursión opcional al Palacio de Versalles, o un día libre para compras y cafés.', en: 'Optional trip to the Palace of Versailles, or a free day for shopping and cafés.' } },
      { dia: 6, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Desayuno y traslado al aeropuerto.', en: 'Breakfast and transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel céntrico con desayuno', en: 'Central hotel with breakfast' },
      { es: 'Traslados aeropuerto, hotel y regreso', en: 'Airport, hotel and return transfers' },
      { es: 'Visita guiada al Louvre', en: 'Guided visit to the Louvre' },
      { es: 'Crucero nocturno por el Sena', en: 'Night cruise on the Seine' },
      { es: 'Asistencia en español durante el viaje', en: 'Spanish-speaking assistance during the trip' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos internacionales (te los cotizamos aparte)', en: 'International flights (we quote them separately)' },
      { es: 'Comidas que no aparecen en el itinerario', en: 'Meals not listed in the itinerary' },
      { es: 'Visa Schengen, si tu pasaporte la requiere', en: 'Schengen visa, if your passport requires one' },
      { es: 'Propinas y gastos personales', en: 'Tips and personal expenses' },
    ],
    imagen: foto(14681748, { es: 'Torre Eiffel al atardecer sobre los tejados de París', en: 'Eiffel Tower at sunset above the rooftops of Paris' }, 'Gökberk Keskinkılıç'),
    galeria: [
      foto(40168038, { es: 'Skyline de París con la Torre Eiffel al anochecer', en: 'Paris skyline with the Eiffel Tower at dusk' }, 'Svitlana Shakalova'),
      foto(34503355, { es: 'Torre Eiffel contra un cielo de atardecer dramático', en: 'Eiffel Tower against a dramatic sunset sky' }, 'Ismail Maqbool'),
      foto(34687788, { es: 'Torre Eiffel iluminada en la penumbra de París', en: 'Eiffel Tower lit up in the Paris twilight' }, 'Tarkan Atak Kan'),
      foto(2939808, { es: 'Vista de la Torre Eiffel al crepúsculo entre la ciudad', en: 'View of the Eiffel Tower at dusk over the city' }, 'Rubal N Simran Rainu'),
      foto(2956953, { es: 'Silueta de la Torre Eiffel al atardecer', en: 'Silhouette of the Eiffel Tower at sunset' }, 'Anna Urlapova'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Necesito visa para ir a París desde Colombia?', en: 'Do I need a visa to visit Paris from Colombia?' },
        respuesta: { es: 'Los colombianos necesitan visa Schengen para estancias cortas. Te orientamos con los documentos y los tiempos antes de confirmar tu viaje.', en: 'Colombians need a Schengen visa for short stays. We guide you on the documents and timing before you confirm your trip.' },
      },
      {
        pregunta: { es: '¿El hotel incluye desayuno?', en: 'Does the hotel include breakfast?' },
        respuesta: { es: 'Sí, el hotel recomendado incluye desayuno. Si prefieres otra categoría de hotel, lo ajustamos en tu propuesta.', en: 'Yes, the recommended hotel includes breakfast. If you prefer another hotel category, we adjust it in your proposal.' },
      },
    ],
  },
  {
    slug: 'roma',
    nombre: { es: 'Roma', en: 'Rome' },
    region: 'Europa',
    pais: { es: 'Italia', en: 'Italy' },
    duracion: { dias: 6, noches: 5 },
    resumen: {
      es: 'Del Coliseo a las fuentes de Trastevere, con clases de pasta y tardes sin prisa.',
      en: 'From the Colosseum to the fountains of Trastevere, with pasta classes and unhurried afternoons.',
    },
    descripcion: [
      {
        es: 'Roma se vive en capas: ruinas imperiales junto a plazas barrocas y trattorias de barrio. Este paquete te lleva a sus lugares imprescindibles sin que pierdas el gusto por pasear.',
        en: 'Rome is lived in layers: imperial ruins next to baroque squares and neighborhood trattorias. This package takes you to its essential sights without losing the pleasure of wandering.',
      },
      {
        es: 'Tendrás tiempo para el Vaticano, el Foro Romano y los callejones de Trastevere, además de una clase de pasta para llevarte un recuerdo que sabe a casa. Un viaje ideal para tu primera visita a Italia.',
        en: 'You will have time for the Vatican, the Roman Forum and the alleys of Trastevere, plus a pasta class so you take home a memory that tastes like home. An ideal trip for your first visit to Italy.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada a Trastevere', en: 'Arrival in Trastevere' }, descripcion: { es: 'Traslado al hotel y paseo nocturno por el barrio, con cena en una trattoria local.', en: 'Transfer to the hotel and an evening stroll through the neighborhood, with dinner at a local trattoria.' } },
      { dia: 2, titulo: { es: 'Coliseo y Foro Romano', en: 'Colosseum and Roman Forum' }, descripcion: { es: 'Recorrido guiado por el Coliseo y el Foro, con entrada incluida.', en: 'Guided tour of the Colosseum and the Forum, entrance included.' } },
      { dia: 3, titulo: { es: 'Vaticano y Capilla Sixtina', en: 'Vatican and Sistine Chapel' }, descripcion: { es: 'Visita guiada a los Museos Vaticanos y a la Capilla Sixtina.', en: 'Guided visit to the Vatican Museums and the Sistine Chapel.' } },
      { dia: 4, titulo: { es: 'Trevi y el Panteón', en: 'Trevi and the Pantheon' }, descripcion: { es: 'Caminata por el centro histórico: Fontana di Trevi, Panteón y Piazza Navona.', en: 'Walk through the historic center: Trevi Fountain, the Pantheon and Piazza Navona.' } },
      { dia: 5, titulo: { es: 'Clase de pasta', en: 'Pasta class' }, descripcion: { es: 'Mañana en una escuela de cocina y cena para compartir lo que preparaste.', en: 'Morning at a cooking school and dinner to share what you made.' } },
      { dia: 6, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Desayuno y traslado al aeropuerto.', en: 'Breakfast and transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel céntrico con desayuno', en: 'Central hotel with breakfast' },
      { es: 'Entradas guiadas al Coliseo y al Foro Romano', en: 'Guided entry to the Colosseum and the Roman Forum' },
      { es: 'Visita guiada a los Museos Vaticanos', en: 'Guided visit to the Vatican Museums' },
      { es: 'Clase de pasta con cena', en: 'Pasta class with dinner' },
      { es: 'Traslados aeropuerto y hotel', en: 'Airport and hotel transfers' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos internacionales', en: 'International flights' },
      { es: 'Tasa de turismo de la ciudad, que se paga en el hotel', en: 'City tourist tax, paid at the hotel' },
      { es: 'Excursiones opcionales fuera de Roma', en: 'Optional trips outside Rome' },
      { es: 'Propinas y gastos personales', en: 'Tips and personal expenses' },
    ],
    imagen: foto(19433905, { es: 'Coliseo romano visto desde una calle llena de vida', en: 'Roman Colosseum seen from a lively street' }, 'Donald Meta'),
    galeria: [
      foto(20422013, { es: 'Coliseo y el Arco de Constantino al atardecer', en: 'Colosseum and the Arch of Constantine at sunset' }, 'Alejandro Aznar'),
      foto(30712971, { es: 'Calle histórica de Roma con arquitectura antigua', en: 'Historic Rome street with ancient architecture' }, 'Fatih Altuntaş'),
      foto(17371362, { es: 'Vista aérea del Coliseo y la ciudad de Roma', en: 'Aerial view of the Colosseum and the city of Rome' }, 'Efrem Efre'),
      foto(15562413, { es: 'Coliseo de Roma con un cielo de atardecer sereno', en: 'Roman Colosseum under a calm evening sky' }, 'Görkem Özdemir'),
      foto(33151538, { es: 'Calle encantadora de Roma con el Coliseo al fondo', en: 'Charming Rome street with the Colosseum in the background' }, 'Mark Thomas'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Hay que reservar las entradas al Coliseo con anticipación?', en: 'Do I need to book Colosseum tickets in advance?' },
        respuesta: { es: 'Sí, los cupos son limitados en temporada alta. Nosotros reservamos tus entradas con horario dentro del paquete.', en: 'Yes, slots are limited in peak season. We book your tickets with a set time as part of the package.' },
      },
      {
        pregunta: { es: '¿Puedo cambiar la clase de pasta por otra actividad?', en: 'Can I swap the pasta class for another activity?' },
        respuesta: { es: 'Podemos cambiarla por una cata de vinos o un paseo en Vespa guiado. Lo confirmamos contigo por WhatsApp.', en: 'We can swap it for a wine tasting or a guided Vespa ride. We confirm it with you on WhatsApp.' },
      },
    ],
  },
  {
    slug: 'cancun',
    nombre: { es: 'Cancún', en: 'Cancún' },
    region: 'Caribe',
    pais: { es: 'México', en: 'Mexico' },
    duracion: { dias: 5, noches: 4 },
    resumen: {
      es: 'Arena blanca, aguas turquesa y un cenote para refrescarte después del sol.',
      en: 'White sand, turquoise waters and a cenote to cool off after the sun.',
    },
    descripcion: [
      {
        es: 'Cancún combina playas de arena clara con una vida nocturna animada y una naturaleza sorprendente. Este paquete te deja disfrutar del mar y, al mismo tiempo, conocer la cultura maya.',
        en: 'Cancún combines pale sand beaches with a lively nightlife and surprising nature. This package lets you enjoy the sea while getting to know Mayan culture.',
      },
      {
        es: 'Pasarás tus días entre la playa y excursiones bien organizadas: Isla Mujeres en catamarán, cenotes para nadar en aguas dulces y las ruinas de Tulum frente al mar. Ideal para viajar en pareja o con amigos.',
        en: 'You will spend your days between the beach and well-organized excursions: Isla Mujeres by catamaran, cenotes for swimming in fresh water and the ruins of Tulum overlooking the sea. Ideal for couples or friends.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada y zona hotelera', en: 'Arrival and hotel zone' }, descripcion: { es: 'Traslado al hotel frente al mar y primer baño en el Caribe.', en: 'Transfer to the beachfront hotel and your first swim in the Caribbean.' } },
      { dia: 2, titulo: { es: 'Isla Mujeres en catamarán', en: 'Isla Mujeres by catamaran' }, descripcion: { es: 'Navegación de media mañana con parada para nadar y almorzar en la isla.', en: 'Mid-morning sail with a stop to swim and have lunch on the island.' } },
      { dia: 3, titulo: { es: 'Cenotes y Tulum', en: 'Cenotes and Tulum' }, descripcion: { es: 'Baño en dos cenotes y visita a las ruinas de Tulum, con la playa al fondo.', en: 'Swim in two cenotes and a visit to the Tulum ruins, with the beach below.' } },
      { dia: 4, titulo: { es: 'Día libre en la playa', en: 'Free beach day' }, descripcion: { es: 'Tiempo libre para piscina, spa o paseo por el malecón.', en: 'Free time for the pool, a spa or a walk along the boardwalk.' } },
      { dia: 5, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Traslado al aeropuerto.', en: 'Transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel frente al mar con plan todo incluido', en: 'Beachfront hotel with all-inclusive plan' },
      { es: 'Traslados aeropuerto y hotel', en: 'Airport and hotel transfers' },
      { es: 'Excursión a Isla Mujeres en catamarán', en: 'Catamaran excursion to Isla Mujeres' },
      { es: 'Ingreso a dos cenotes con equipo de snorkel', en: 'Entry to two cenotes with snorkel gear' },
      { es: 'Asistencia 24/7 durante tu estadía', en: '24/7 assistance during your stay' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos', en: 'Flights' },
      { es: 'Excursión a Chichén Itzá (opcional, la cotizamos aparte)', en: 'Chichén Itzá trip (optional, quoted separately)' },
      { es: 'Seguro médico de viaje (recomendado)', en: 'Travel medical insurance (recommended)' },
      { es: 'Propinas', en: 'Tips' },
    ],
    imagen: foto(506810, { es: 'Playa de aguas turquesa con vegetación verde en Cancún', en: 'Turquoise-water beach with green vegetation in Cancún' }, 'Nextvoyage'),
    galeria: [
      foto(8437275, { es: 'Playa de Cancún con agua cristalina y cielo despejado', en: 'Cancún beach with clear water and a clear sky' }, 'Tellez Erik'),
      foto(20210509, { es: 'Vista aérea de un resort en Cancún con arena clara', en: 'Aerial view of a Cancún resort with pale sand' }, 'Israel Torres'),
      foto(17244361, { es: 'Paseo en tabla sobre las aguas turquesa de Cancún', en: 'Paddleboarding over the turquoise waters of Cancún' }, 'Hugo Ed'),
      foto(37678511, { es: 'Playa de Cancún vista desde atrás, con mar y arena', en: 'Cancún beach seen from behind, with sea and sand' }, 'Margo Evardson'),
      foto(37668900, { es: 'Olas turquesa rompiendo en la playa de Cancún', en: 'Turquoise waves breaking on the Cancún beach' }, 'Margo Evardson'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Cuál es la mejor época para viajar a Cancún?', en: 'When is the best time to travel to Cancún?' },
        respuesta: { es: 'Entre diciembre y abril el clima es más seco y agradable. Entre junio y noviembre puede haber lluvias, así que revisamos el pronóstico contigo.', en: 'From December to April the weather is drier and more pleasant. From June to November there can be rain, so we check the forecast with you.' },
      },
      {
        pregunta: { es: '¿Los cenotes son seguros para nadar?', en: 'Are the cenotes safe to swim in?' },
        respuesta: { es: 'Sí, son parques autorizados con guía y chaleco salvavidas. Te damos recomendaciones antes de salir.', en: 'Yes, they are licensed parks with a guide and life jacket. We give you recommendations before you go.' },
      },
    ],
  },
  {
    slug: 'cartagena',
    nombre: { es: 'Cartagena', en: 'Cartagena' },
    region: 'Caribe',
    pais: { es: 'Colombia', en: 'Colombia' },
    duracion: { dias: 4, noches: 3 },
    resumen: {
      es: 'Murallas, balcones de buganvilia y noches de música en la ciudad más querida del Caribe colombiano.',
      en: 'Walls, bougainvillea balconies and music-filled nights in the most beloved city on the Colombian Caribbean.',
    },
    descripcion: [
      {
        es: 'Cartagena es un viaje corto que se siente largo. Sus calles empedradas, sus casas de colores y sus plazas llenas de vida la convierten en una escapada perfecta desde cualquier ciudad de Colombia.',
        en: 'Cartagena is a short trip that feels long. Its cobblestone streets, colorful houses and lively squares make it a perfect getaway from any city in Colombia.',
      },
      {
        es: 'El paquete incluye un recorrido por la ciudad amurallada, una excursión en lancha a las Islas del Rosario y tiempo libre para recorrer Getsemaní, donde la noche empieza con música en la calle.',
        en: 'The package includes a tour of the walled city, a boat trip to the Rosario Islands and free time to explore Getsemaní, where the night starts with music in the street.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada y Ciudad Amurallada', en: 'Arrival and the Walled City' }, descripcion: { es: 'Traslado al hotel boutique y paseo al atardecer por las murallas.', en: 'Transfer to the boutique hotel and a sunset walk along the walls.' } },
      { dia: 2, titulo: { es: 'Islas del Rosario', en: 'Rosario Islands' }, descripcion: { es: 'Lancha a las islas con parada para nadar y almuerzo con pescado fresco.', en: 'Boat to the islands with a stop to swim and lunch with fresh fish.' } },
      { dia: 3, titulo: { es: 'Getsemaní y el Castillo', en: 'Getsemaní and the Castle' }, descripcion: { es: 'Visita guiada al Castillo San Felipe y tarde libre en Getsemaní.', en: 'Guided visit to San Felipe Castle and a free afternoon in Getsemaní.' } },
      { dia: 4, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Desayuno y traslado al aeropuerto.', en: 'Breakfast and transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel boutique en el centro histórico con desayuno', en: 'Boutique hotel in the historic center with breakfast' },
      { es: 'Traslados aeropuerto y hotel', en: 'Airport and hotel transfers' },
      { es: 'Tour guiado por la Ciudad Amurallada', en: 'Guided tour of the Walled City' },
      { es: 'Excursión a las Islas del Rosario con almuerzo', en: 'Rosario Islands trip with lunch' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos o terrestres hasta Cartagena', en: 'Air or land tickets to Cartagena' },
      { es: 'Cenas y bebidas', en: 'Dinners and drinks' },
      { es: 'Entrada al Castillo San Felipe', en: 'San Felipe Castle entry' },
      { es: 'Propinas', en: 'Tips' },
    ],
    imagen: foto(13805169, { es: 'Casas coloniales de colores con balcones de madera en Cartagena', en: 'Colorful colonial houses with wooden balconies in Cartagena' }, 'Carlos Anchila'),
    galeria: [
      foto(13804517, { es: 'Calle colonial de Cartagena con la torre de la catedral al fondo', en: 'Colonial Cartagena street with the cathedral tower in the background' }, 'Maria Paula Medina'),
      foto(13804522, { es: 'Arquitectura colonial vibrante en una calle de Cartagena', en: 'Vibrant colonial architecture on a Cartagena street' }, 'Maria Paula Medina'),
      foto(1684081, { es: 'Calle urbana de Cartagena con torre histórica', en: 'Urban Cartagena street with a historic tower' }, 'Daria Obymaha'),
      foto(10833921, { es: 'Edificio amarillo con balcones blancos en Cartagena', en: 'Yellow building with white balconies in Cartagena' }, 'Roberto Castano'),
      foto(6381084, { es: 'Fachada rosa con balcones en Cartagena bajo un cielo azul', en: 'Pink facade with balconies in Cartagena under a blue sky' }, 'Nubia Navarro'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Desde qué ciudades de Colombia conviene volar?', en: 'Which Colombian cities are best to fly from?' },
        respuesta: { es: 'Desde Bogotá, Medellín, Cali y otras ciudades hay vuelos directos. Cotizamos el tiquete según tu origen y fecha.', en: 'There are direct flights from Bogotá, Medellín, Cali and other cities. We quote the ticket based on your origin and date.' },
      },
      {
        pregunta: { es: '¿Es un destino seguro para ir en familia?', en: 'Is it a safe destination for families?' },
        respuesta: { es: 'Sí. El centro histórico es muy transitado y los traslados se hacen con conductores de confianza.', en: 'Yes. The historic center is very busy and transfers are made with trusted drivers.' },
      },
    ],
  },
  {
    slug: 'cusco-machu-picchu',
    nombre: { es: 'Cusco y Machu Picchu', en: 'Cusco and Machu Picchu' },
    region: 'Sudamérica',
    pais: { es: 'Perú', en: 'Peru' },
    duracion: { dias: 7, noches: 6 },
    resumen: {
      es: 'Altitud, ruinas incas y el tren hacia la ciudadela más famosa de Sudamérica.',
      en: 'High altitude, Inca ruins and the train to South America\u2019s most famous citadel.',
    },
    descripcion: [
      {
        es: 'Machu Picchu es uno de esos lugares que cambian la forma de mirar un viaje. Este paquete te lleva desde Cusco, donde te aclimatas con calma, hasta las terrazas incas entre montañas, con guía especializado en cada paso.',
        en: 'Machu Picchu is one of those places that change the way you see a trip. This package takes you from Cusco, where you acclimatize calmly, to the Inca terraces among the mountains, with a specialized guide at every step.',
      },
      {
        es: 'Recorrerás el Valle Sagrado, subirás en tren hasta Aguas Calientes y entrarás a Machu Picchu temprano, cuando todavía hay niebla. Te recomendamos llegar con buena condición física, porque la altitud se nota en los primeros días.',
        en: 'You will explore the Sacred Valley, take the train to Aguas Calientes and enter Machu Picchu early, while there is still mist. We recommend good physical condition, because the altitude is noticeable in the first days.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada a Cusco', en: 'Arrival in Cusco' }, descripcion: { es: 'Traslado al hotel y día de descanso para adaptarte a la altitud.', en: 'Transfer to the hotel and a rest day to adjust to the altitude.' } },
      { dia: 2, titulo: { es: 'Valle Sagrado', en: 'Sacred Valley' }, descripcion: { es: 'Visita a los mercados de Pisac y a las terrazas agrícolas de Ollantaytambo.', en: 'Visit to the Pisac markets and the farming terraces of Ollantaytambo.' } },
      { dia: 3, titulo: { es: 'Tren a Aguas Calientes', en: 'Train to Aguas Calientes' }, descripcion: { es: 'Viaje en tren por el cañón del río Urubamba hasta el pueblo de acceso.', en: 'Train ride through the Urubamba River canyon to the gateway town.' } },
      { dia: 4, titulo: { es: 'Machu Picchu', en: 'Machu Picchu' }, descripcion: { es: 'Ingreso temprano con guía oficial y tiempo libre para explorar las ruinas.', en: 'Early entry with an official guide and free time to explore the ruins.' } },
      { dia: 5, titulo: { es: 'Sacsayhuamán y Qorikancha', en: 'Sacsayhuamán and Qorikancha' }, descripcion: { es: 'Regreso a Cusco y visita a las fortalezas y templos incas de la ciudad.', en: 'Return to Cusco and a visit to the Inca fortresses and temples of the city.' } },
      { dia: 6, titulo: { es: 'Día libre en Cusco', en: 'Free day in Cusco' }, descripcion: { es: 'Tiempo para el mercado de San Pedro, cafés y compras de artesanía.', en: 'Time for the San Pedro market, cafés and handicraft shopping.' } },
      { dia: 7, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Traslado al aeropuerto.', en: 'Transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel en Cusco con desayuno', en: 'Hotel in Cusco with breakfast' },
      { es: 'Tren de ida y vuelta a Aguas Calientes', en: 'Round-trip train to Aguas Calientes' },
      { es: 'Boleto de ingreso a Machu Picchu con guía oficial', en: 'Machu Picchu entry ticket with official guide' },
      { es: 'Traslados y guía en el Valle Sagrado', en: 'Transfers and guide in the Sacred Valley' },
      { es: 'Asistencia para la altitud', en: 'Altitude assistance' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos', en: 'Flights' },
      { es: 'Bus de subida a Machu Picchu (opcional)', en: 'Bus up to Machu Picchu (optional)' },
      { es: 'Seguro de viaje con cobertura en altura', en: 'Travel insurance with high-altitude coverage' },
      { es: 'Comidas no indicadas y propinas', en: 'Meals not listed and tips' },
    ],
    imagen: foto(37885473, { es: 'Vista aérea de Machu Picchu entre las montañas de los Andes', en: 'Aerial view of Machu Picchu among the Andes mountains' }, 'Laura Rudi'),
    galeria: [
      foto(16973651, { es: 'Ciudad inca de Machu Picchu con montañas al fondo', en: 'Inca city of Machu Picchu with mountains behind' }, 'Eddie Kiszka'),
      foto(15449571, { es: 'Ruinas de Machu Picchu en los Andes peruanos', en: 'Machu Picchu ruins in the Peruvian Andes' }, 'Alexandra Schulz'),
      foto(29964216, { es: 'Ruinas de Machu Picchu entre la neblina de los Andes', en: 'Machu Picchu ruins in the Andean mist' }, 'Susan Flores'),
      foto(17030795, { es: 'Piedras incas de Machu Picchu con selva de fondo', en: 'Inca stonework at Machu Picchu with jungle behind' }, 'Joaquín Garduño'),
      foto(36227058, { es: 'Terrazas y montañas verdes alrededor de Machu Picchu', en: 'Terraces and green mountains around Machu Picchu' }, 'Diego Mundo'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Cuándo hay que reservar la entrada a Machu Picchu?', en: 'When should I book Machu Picchu entry?' },
        respuesta: { es: 'Los cupos son limitados por día. Reservamos el boleto y el tren con anticipación para asegurar tu horario.', en: 'Daily slots are limited. We book the ticket and train well in advance to secure your time slot.' },
      },
      {
        pregunta: { es: '¿La altitud de Cusco es un problema?', en: 'Is the altitude in Cusco a problem?' },
        respuesta: { es: 'Cusco está a más de 3.400 metros. El primer día es de descanso y te damos recomendaciones de hidratación y ritmo.', en: 'Cusco is over 3,400 meters high. The first day is for rest, and we give you hydration and pacing recommendations.' },
      },
    ],
  },
  {
    slug: 'tokio',
    nombre: { es: 'Tokio', en: 'Tokyo' },
    region: 'Asia',
    pais: { es: 'Japón', en: 'Japan' },
    duracion: { dias: 8, noches: 7 },
    resumen: {
      es: 'Templos silenciosos, barrios de neón y la mejor comida de tu vida en una sola ciudad.',
      en: 'Quiet temples, neon neighborhoods and some of the best food of your life in a single city.',
    },
    descripcion: [
      {
        es: 'Tokio es una ciudad de contrastes: en una misma tarde puedes estar en un templo centenario y, minutos después, en una calle iluminada por luces de neón. Este paquete te ayuda a entenderla sin perder horas en trenes.',
        en: 'Tokyo is a city of contrasts: in the same afternoon you can be in a century-old temple and minutes later on a street lit by neon. This package helps you understand it without losing hours on trains.',
      },
      {
        es: 'Te alojas en zonas bien conectadas, con tarjeta de transporte cargada, y tienes una excursión de día al monte Fuji. Es un viaje para quienes disfrutan la comida, la historia y la tecnología, con ritmo flexible.',
        en: 'You stay in well-connected areas, with a transit card already loaded, and enjoy a day trip to Mount Fuji. It is a trip for those who love food, history and technology, at a flexible pace.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada a Shinjuku', en: 'Arrival in Shinjuku' }, descripcion: { es: 'Traslado al hotel y primera noche en el barrio de los rascacielos y los bares pequeños.', en: 'Transfer to the hotel and first night in the district of skyscrapers and tiny bars.' } },
      { dia: 2, titulo: { es: 'Asakusa y Senso-ji', en: 'Asakusa and Senso-ji' }, descripcion: { es: 'Visita al templo más antiguo de Tokio y paseo por la calle comercial Nakamise.', en: 'Visit to Tokyo\u2019s oldest temple and a stroll along the Nakamise shopping street.' } },
      { dia: 3, titulo: { es: 'Shibuya y Harajuku', en: 'Shibuya and Harajuku' }, descripcion: { es: 'Cruce de Shibuya, el santuario Meiji y la calle Takeshita con tiempo libre.', en: 'Crossing Shibuya, the Meiji Shrine and Takeshita Street with free time.' } },
      { dia: 4, titulo: { es: 'Monte Fuji', en: 'Mount Fuji' }, descripcion: { es: 'Excursión de día con guía a los lagos Kawaguchi, con vista del monte si el clima acompaña.', en: 'Guided day trip to the Kawaguchi lakes, with a view of the mountain if the weather allows.' } },
      { dia: 5, titulo: { es: 'Mercado de pescado y sushi', en: 'Fish market and sushi' }, descripcion: { es: 'Desayuno en el mercado Toyosu y clase breve de sushi por la tarde.', en: 'Breakfast at the Toyosu market and a short sushi class in the afternoon.' } },
      { dia: 6, titulo: { es: 'Ginza y Akihabara', en: 'Ginza and Akihabara' }, descripcion: { es: 'Tarde de compras en Ginza y recorrido por la tecnología de Akihabara.', en: 'Afternoon shopping in Ginza and a tour of Akihabara\u2019s technology.' } },
      { dia: 7, titulo: { es: 'Día libre', en: 'Free day' }, descripcion: { es: 'Tiempo para explorar a tu ritmo: Ueno, Odaiba o el barrio que más te guste.', en: 'Time to explore at your own pace: Ueno, Odaiba or whichever neighborhood you like most.' } },
      { dia: 8, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Traslado al aeropuerto.', en: 'Transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel céntrico con desayuno', en: 'Central hotel with breakfast' },
      { es: 'Tarjeta de transporte con saldo inicial', en: 'Transit card with starting balance' },
      { es: 'Excursión de día al monte Fuji con guía', en: 'Guided day trip to Mount Fuji' },
      { es: 'Traslados aeropuerto y hotel', en: 'Airport and hotel transfers' },
      { es: 'Asistencia en español 24/7', en: '24/7 assistance in Spanish' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos internacionales', en: 'International flights' },
      { es: 'Visa de Japón, si tu pasaporte la requiere', en: 'Japan visa, if your passport requires one' },
      { es: 'Comidas no indicadas en el itinerario', en: 'Meals not listed in the itinerary' },
      { es: 'Entradas a atracciones fuera del programa', en: 'Tickets to attractions outside the program' },
    ],
    imagen: foto(30933060, { es: 'Calle de Tokio de noche con edificios iluminados y gente', en: 'Tokyo street at night with lit buildings and people' }, 'Julias Torten und Törtchen'),
    galeria: [
      foto(16789398, { es: 'Calle de Tokio con luces de neón y ambiente nocturno', en: 'Tokyo street with neon lights and a night atmosphere' }, 'Alan W'),
      foto(29518215, { es: 'Callejón de una ciudad japonesa con vida nocturna', en: 'Alley in a Japanese city with nightlife' }, 'G N'),
      foto(18867525, { es: 'Calle de Tokio con reflejos de neón sobre el pavimento mojado', en: 'Tokyo street with neon reflections on wet pavement' }, 'Johannes Plenio'),
      foto(20392882, { es: 'Letreros de neón sobre un mercado nocturno de Tokio', en: 'Neon signs over a Tokyo night market' }, 'Jerry Wang'),
      foto(34931589, { es: 'Mercado tradicional japonés iluminado de noche en Tokio', en: 'Traditional Japanese market lit up at night in Tokyo' }, 'sugar jet'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Me sirve el inglés o necesito saber japonés?', en: 'Is English enough, or do I need to speak Japanese?' },
        respuesta: { es: 'Con un poco de paciencia y apps de traducción te desenvuelves bien. Además, nuestros guías y el equipo de asistencia te acompañan en español.', en: 'With a little patience and translation apps you will get by well. Our guides and assistance team also support you in Spanish.' },
      },
      {
        pregunta: { es: '¿Se puede ver el monte Fuji todos los días?', en: 'Can you see Mount Fuji every day?' },
        respuesta: { es: 'No siempre: las nubes son frecuentes. Por eso la excursión tiene un día de reserva si el clima no acompaña.', en: 'Not always: clouds are common. That is why the excursion has a backup day if the weather does not cooperate.' },
      },
    ],
  },
  {
    slug: 'bali',
    nombre: { es: 'Bali', en: 'Bali' },
    region: 'Asia',
    pais: { es: 'Indonesia', en: 'Indonesia' },
    duracion: { dias: 8, noches: 7 },
    resumen: {
      es: 'Arrozales verdes, templos al atardecer y playas tranquilas para bajar el ritmo.',
      en: 'Green rice terraces, temples at sunset and calm beaches to slow your pace.',
    },
    descripcion: [
      {
        es: 'Bali es el destino para desconectarte. Empiezas en Ubud, entre arrozales escalonados, cascadas y templos hindúes, y luego pasas a la costa para descansar frente al mar.',
        en: 'Bali is the place to disconnect. You start in Ubud, among terraced rice fields, waterfalls and Hindu temples, then move to the coast to rest by the sea.',
      },
      {
        es: 'El paquete combina días de cultura con días de playa y una excursión en lancha a Nusa Penida, donde el agua tiene un color que cuesta creer. Pensado para parejas y viajeros que buscan calma sin renunciar a la experiencia.',
        en: 'The package combines culture days with beach days and a boat trip to Nusa Penida, where the water has a color that is hard to believe. Designed for couples and travelers who want calm without giving up experiences.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada a Ubud', en: 'Arrival in Ubud' }, descripcion: { es: 'Traslado a la villa y paseo al atardecer por el centro de Ubud.', en: 'Transfer to the villa and a sunset walk through central Ubud.' } },
      { dia: 2, titulo: { es: 'Arrozales de Tegallalang', en: 'Tegallalang rice terraces' }, descripcion: { es: 'Caminata por los arrozales y visita a una cascada cercana.', en: 'Walk through the rice terraces and a visit to a nearby waterfall.' } },
      { dia: 3, titulo: { es: 'Bosque de monos y templos', en: 'Monkey forest and temples' }, descripcion: { es: 'Visita al Bosque Sagrado de los Monos y al templo de Tirta Empul.', en: 'Visit to the Sacred Monkey Forest and the Tirta Empul temple.' } },
      { dia: 4, titulo: { es: 'Danza kecak en Uluwatu', en: 'Kecak dance in Uluwatu' }, descripcion: { es: 'Atardecer en el templo de Uluwatu con la danza tradicional kecak.', en: 'Sunset at Uluwatu temple with the traditional kecak dance.' } },
      { dia: 5, titulo: { es: 'Traslado a la costa', en: 'Transfer to the coast' }, descripcion: { es: 'Viaje a Seminyak con tiempo libre en la playa y en la piscina.', en: 'Trip to Seminyak with free time at the beach and the pool.' } },
      { dia: 6, titulo: { es: 'Día libre en la playa', en: 'Free beach day' }, descripcion: { es: 'Descanso, spa o clases de surf para principiantes.', en: 'Rest, a spa or beginner surf lessons.' } },
      { dia: 7, titulo: { es: 'Nusa Penida en lancha', en: 'Nusa Penida by boat' }, descripcion: { es: 'Excursión de día con parada para snorkel en aguas cristalinas.', en: 'Day trip with a snorkel stop in crystal-clear waters.' } },
      { dia: 8, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Traslado al aeropuerto.', en: 'Transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Alojamiento con piscina y desayuno', en: 'Accommodation with pool and breakfast' },
      { es: 'Traslados privados entre zonas', en: 'Private transfers between areas' },
      { es: 'Tour de arrozales con guía', en: 'Rice terrace tour with guide' },
      { es: 'Excursión a Nusa Penida en lancha con snorkel', en: 'Nusa Penida boat trip with snorkel' },
      { es: 'Asistencia 24/7 durante el viaje', en: '24/7 assistance during the trip' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos internacionales', en: 'International flights' },
      { es: 'Visa de Indonesia, según tu pasaporte', en: 'Indonesia visa, depending on your passport' },
      { es: 'Tasa de turismo de la isla', en: 'Island tourist tax' },
      { es: 'Comidas fuera del desayuno y propinas', en: 'Meals other than breakfast, and tips' },
    ],
    imagen: foto(17716409, { es: 'Templo balinés entre arrozales verdes vistos desde el aire', en: 'Balinese temple among green rice fields seen from above' }, 'Agung Pandit Wiguna'),
    galeria: [
      foto(15994332, { es: 'Arrozales escalonados rodeados de vegetación tropical', en: 'Terraced rice fields surrounded by tropical vegetation' }, 'Balazs Simon'),
      foto(36810327, { es: 'Vista aérea de arrozales verdes en Bali', en: 'Aerial view of green rice fields in Bali' }, 'Tom Fisk'),
      foto(35428411, { es: 'Terrazas de arroz rodeadas de bosque tropical en Bali', en: 'Rice terraces surrounded by tropical forest in Bali' }, 'Tom Fisk'),
      foto(15994341, { es: 'Campos de arroz y palmeras en un paisaje rural de Bali', en: 'Rice fields and palm trees in a rural Bali landscape' }, 'Balazs Simon'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Cuál es la mejor época para ir a Bali?', en: 'When is the best time to visit Bali?' },
        respuesta: { es: 'La temporada seca, de abril a octubre, es la más popular para playa. En los meses de lluvia los días son cortos pero verdes.', en: 'The dry season, April to October, is the most popular for beaches. In the rainy months the days are shorter but very green.' },
      },
      {
        pregunta: { es: '¿Puedo combinar Bali con otro destino?', en: 'Can I combine Bali with another destination?' },
        respuesta: { es: 'Sí, podemos sumar Singapur o Tailandia. Lo diseñamos contigo según el tiempo que tengas.', en: 'Yes, we can add Singapore or Thailand. We design it with you based on how much time you have.' },
      },
    ],
  },
  {
    slug: 'dubai',
    nombre: { es: 'Dubái', en: 'Dubai' },
    region: 'Medio Oriente',
    pais: { es: 'Emiratos Árabes Unidos', en: 'United Arab Emirates' },
    duracion: { dias: 5, noches: 4 },
    resumen: {
      es: 'Rascacielos, desierto al atardecer y un skyline que se ve distinto cada noche.',
      en: 'Skyscrapers, desert at sunset and a skyline that looks different every night.',
    },
    descripcion: [
      {
        es: 'Dubái es una ciudad que se construyó para sorprender. Sus rascacielos, centros comerciales y marinas conviven con el desierto a pocos minutos del centro.',
        en: 'Dubai is a city built to surprise. Its skyscrapers, malls and marinas coexist with the desert just minutes from downtown.',
      },
      {
        es: 'El paquete incluye el mirador del Burj Khalifa, un paseo en abra por el canal y un safari por las dunas con cena bajo las estrellas. Ideal para una escapada corta con planes que se recuerdan.',
        en: 'The package includes the Burj Khalifa observation deck, an abra ride along the creek and a dune safari with dinner under the stars. Ideal for a short getaway with plans you will remember.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada y la Marina', en: 'Arrival and the Marina' }, descripcion: { es: 'Traslado al hotel y paseo nocturno por la Marina de Dubái.', en: 'Transfer to the hotel and a night walk around Dubai Marina.' } },
      { dia: 2, titulo: { es: 'Burj Khalifa y Dubai Mall', en: 'Burj Khalifa and Dubai Mall' }, descripcion: { es: 'Subida al mirador del Burj Khalifa y tarde libre en el centro comercial.', en: 'Ride up to the Burj Khalifa observation deck and a free afternoon at the mall.' } },
      { dia: 3, titulo: { es: 'Safari por el desierto', en: 'Desert safari' }, descripcion: { es: 'Recogida en el hotel, paseo en dunas y cena tradicional bajo las estrellas.', en: 'Hotel pickup, dune ride and traditional dinner under the stars.' } },
      { dia: 4, titulo: { es: 'Dubái antiguo', en: 'Old Dubai' }, descripcion: { es: 'Paseo en abra por el Creek y visita al barrio histórico de Al Fahidi.', en: 'Abra ride along the Creek and a visit to the historic Al Fahidi district.' } },
      { dia: 5, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Traslado al aeropuerto.', en: 'Transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel 4 estrellas con desayuno', en: '4-star hotel with breakfast' },
      { es: 'Traslados aeropuerto y hotel', en: 'Airport and hotel transfers' },
      { es: 'Entrada al mirador del Burj Khalifa', en: 'Burj Khalifa observation deck entry' },
      { es: 'Safari por el desierto con cena', en: 'Desert safari with dinner' },
      { es: 'Paseo en abra por el Creek', en: 'Abra ride along the Creek' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos internacionales', en: 'International flights' },
      { es: 'Visa de Emiratos Árabes, según tu pasaporte', en: 'UAE visa, depending on your passport' },
      { es: 'Comidas y bebidas fuera del programa', en: 'Meals and drinks outside the program' },
      { es: 'Propinas y compras', en: 'Tips and shopping' },
    ],
    imagen: foto(38510755, { es: 'Skyline de Dubái de noche con el Burj Khalifa iluminado', en: 'Dubai skyline at night with the Burj Khalifa lit up' }, 'Irshad Ahmad'),
    galeria: [
      foto(14930580, { es: 'Luces de Dubái reflejadas en el agua durante la noche', en: 'Dubai lights reflected on the water at night' }, 'San Photography'),
      foto(5671019, { es: 'Burj Al Arab iluminado de noche con palmeras en Dubái', en: 'Burj Al Arab lit up at night with palm trees in Dubai' }, 'tom analogicus'),
      foto(30104146, { es: 'Cielo estrellado sobre una carretera del desierto de Dubái', en: 'Starry sky over a desert road in Dubai' }, 'Mohammed Alim'),
      foto(3680902, { es: 'Hotel Burj Al Arab iluminado en la noche de Dubái', en: 'Burj Al Arab hotel lit up at night in Dubai' }, 'Abbas Mohammed'),
      foto(635543, { es: 'Estructura iluminada bajo un puente en Dubái de noche', en: 'Illuminated structure under a bridge in Dubai at night' }, 'jc dubi'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Hace mucho calor en Dubái?', en: 'Is it very hot in Dubai?' },
        respuesta: { es: 'Entre junio y septiembre las temperaturas son altas. Recomendamos viajar entre noviembre y marzo para disfrutar los planes al aire libre.', en: 'Between June and September temperatures are high. We recommend traveling from November to March to enjoy outdoor plans.' },
      },
      {
        pregunta: { es: '¿Hay que vestir de forma especial?', en: 'Is there a dress code?' },
        respuesta: { es: 'En zonas turísticas la ropa es libre, pero en mezquitas y lugares religiosos se pide ropa que cubra hombros y rodillas.', en: 'In tourist areas clothing is relaxed, but mosques and religious sites ask for clothing that covers shoulders and knees.' },
      },
    ],
  },
  {
    slug: 'nueva-york',
    nombre: { es: 'Nueva York', en: 'New York' },
    region: 'Norteamérica',
    pais: { es: 'Estados Unidos', en: 'United States' },
    duracion: { dias: 6, noches: 5 },
    resumen: {
      es: 'Broadway, Central Park y un skyline que no deja de sorprender, a tu propio ritmo.',
      en: 'Broadway, Central Park and a skyline that never stops surprising you, at your own pace.',
    },
    descripcion: [
      {
        es: 'Nueva York es una ciudad para caminar sin mapa. Cada barrio cuenta una historia distinta, desde los rascacielos de Midtown hasta los cafés de Brooklyn y los puentes con vista al agua.',
        en: 'New York is a city to walk without a map. Every neighborhood tells a different story, from the skyscrapers of Midtown to the cafés of Brooklyn and the bridges with water views.',
      },
      {
        es: 'Este paquete te deja ver lo esencial: la Estatua de la Libertad, Central Park, un musical en Broadway y un atardecer desde el puente de Brooklyn. Las tardes quedan libres para tus propios descubrimientos.',
        en: 'This package lets you see the essentials: the Statue of Liberty, Central Park, a Broadway musical and a sunset from the Brooklyn Bridge. Afternoons are left free for your own discoveries.',
      },
    ],
    itinerario: [
      { dia: 1, titulo: { es: 'Llegada a Midtown', en: 'Arrival in Midtown' }, descripcion: { es: 'Traslado al hotel y caminata por Times Square al anochecer.', en: 'Transfer to the hotel and a walk through Times Square at dusk.' } },
      { dia: 2, titulo: { es: 'Estatua de la Libertad', en: 'Statue of Liberty' }, descripcion: { es: 'Ferry a Liberty Island y recorrido por Lower Manhattan.', en: 'Ferry to Liberty Island and a walk through Lower Manhattan.' } },
      { dia: 3, titulo: { es: 'Central Park y el Met', en: 'Central Park and the Met' }, descripcion: { es: 'Paseo por Central Park y visita al Museo Metropolitano de Arte.', en: 'Stroll through Central Park and a visit to the Metropolitan Museum of Art.' } },
      { dia: 4, titulo: { es: 'Puente de Brooklyn y Dumbo', en: 'Brooklyn Bridge and DUMBO' }, descripcion: { es: 'Caminata por el puente al atardecer y tarde en el barrio de Dumbo.', en: 'Walk across the bridge at sunset and an afternoon in the DUMBO neighborhood.' } },
      { dia: 5, titulo: { es: 'Broadway', en: 'Broadway' }, descripcion: { es: 'Tarde libre y función de musical en categoría estándar.', en: 'Free afternoon and a musical show in standard seating.' } },
      { dia: 6, titulo: { es: 'Regreso', en: 'Return' }, descripcion: { es: 'Traslado al aeropuerto.', en: 'Transfer to the airport.' } },
    ],
    incluye: [
      { es: 'Hotel en Midtown', en: 'Hotel in Midtown' },
      { es: 'Ferry a la Estatua de la Libertad', en: 'Ferry to the Statue of Liberty' },
      { es: 'Tarjeta de metro con saldo inicial', en: 'Subway card with starting balance' },
      { es: 'Entrada a un musical de Broadway', en: 'Broadway musical ticket' },
      { es: 'Traslados aeropuerto y hotel', en: 'Airport and hotel transfers' },
    ],
    noIncluye: [
      { es: 'Tiquetes aéreos internacionales', en: 'International flights' },
      { es: 'Visa de Estados Unidos vigente', en: 'Valid US visa' },
      { es: 'Propinas, que son habituales en restaurantes y taxis', en: 'Tips, which are customary at restaurants and taxis' },
      { es: 'Comidas y compras personales', en: 'Meals and personal shopping' },
    ],
    imagen: foto(8569166, { es: 'Silueta del skyline de Nueva York al atardecer', en: 'New York skyline silhouette at sunset' }, 'Ivana Rodriguez'),
    galeria: [
      foto(18388935, { es: 'Skyline de Nueva York con el One World Trade Center', en: 'New York skyline with One World Trade Center' }, 'Denil Dominic'),
      foto(1461370, { es: 'Rascacielos de Nueva York vistos desde el puente de Brooklyn', en: 'New York skyscrapers seen from the Brooklyn Bridge' }, 'Vlad Alexandru Popa'),
      foto(462267, { es: 'Skyline de Nueva York con el puente de Brooklyn iluminado', en: 'New York skyline with the Brooklyn Bridge lit up' }, 'Pixabay'),
      foto(38048122, { es: 'Vista aérea de Midtown Manhattan con Central Park', en: 'Aerial view of Midtown Manhattan with Central Park' }, 'Andres Figueroa'),
      foto(16042185, { es: 'Skyline de Nueva York bajo nubes dramáticas', en: 'New York skyline under dramatic clouds' }, 'Following NYC'),
    ],
    faqs: [
      {
        pregunta: { es: '¿Necesito visa para Estados Unidos?', en: 'Do I need a visa for the United States?' },
        respuesta: { es: 'Sí, los colombianos necesitan visa de turista vigente. Te orientamos con el proceso y los tiempos antes de reservar.', en: 'Yes, Colombians need a valid tourist visa. We guide you through the process and timing before you book.' },
      },
      {
        pregunta: { es: '¿Cuánto cuesta moverse por la ciudad?', en: 'How much does it cost to get around the city?' },
        respuesta: { es: 'El metro es económico y cubre casi todo. Te incluimos una tarjeta con saldo para empezar.', en: 'The subway is inexpensive and covers almost everywhere. We include a card with starting balance.' },
      },
    ],
  },
];

export function getPaquete(slug: string) {
  return PAQUETES.find((paquete) => paquete.slug === slug);
}
