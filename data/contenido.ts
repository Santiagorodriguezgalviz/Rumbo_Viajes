import type { Faq, Foto } from '@/data/paquetes';
import type { Bilingue } from '@/lib/preferencias';

export const HERO_IMAGEN: Foto = {
  src: '/fotos/destinos/14681748.jpg',
  alt: {
    es: 'Torre Eiffel iluminada al atardecer sobre París',
    en: 'Eiffel Tower lit up at sunset over Paris',
  },
  fotografo: 'Gökberk Keskinkılıç',
};

export const FOTO_PAREJA: Foto = {
  src: '/fotos/pareja.jpg',
  alt: {
    es: 'Pareja sonriente con maletas en un aeropuerto, lista para viajar',
    en: 'Smiling couple with suitcases in an airport, ready to travel',
  },
  fotografo: 'Gustavo Fring',
};

export const PASOS: { titulo: Bilingue; descripcion: Bilingue }[] = [
  {
    titulo: { es: 'Cuéntanos tu sueño', en: 'Tell us your dream' },
    descripcion: {
      es: 'Escríbenos por WhatsApp con el destino, las fechas y cuántos viajan.',
      en: 'Message us on WhatsApp with the destination, the dates and how many are traveling.',
    },
  },
  {
    titulo: { es: 'Diseñamos tu ruta', en: 'We design your route' },
    descripcion: {
      es: 'Armamos el itinerario según tu ritmo, tus intereses y tu presupuesto.',
      en: 'We build the itinerary around your pace, your interests and your budget.',
    },
  },
  {
    titulo: { es: 'Recibe tu propuesta', en: 'Get your proposal' },
    descripcion: {
      es: 'Te enviamos el precio final, las opciones de hotel y la disponibilidad.',
      en: 'We send you the final price, hotel options and availability.',
    },
  },
  {
    titulo: { es: 'Viaja tranquilo', en: 'Travel with peace of mind' },
    descripcion: {
      es: 'Confirmamos tu reserva y te acompañamos antes, durante y después del viaje.',
      en: 'We confirm your booking and support you before, during and after the trip.',
    },
  },
];

export const MOTIVOS: { titulo: Bilingue; descripcion: Bilingue }[] = [
  {
    titulo: { es: 'Asesoría de personas reales', en: 'Real people advising you' },
    descripcion: {
      es: 'Hablas con un asesor que conoce cada destino y te responde con datos concretos.',
      en: 'You talk to an advisor who knows each destination and answers with concrete details.',
    },
  },
  {
    titulo: { es: 'Rutas con criterio', en: 'Thoughtful routes' },
    descripcion: {
      es: 'Cada itinerario deja tiempo libre para descubrir, sin llenar cada hora de traslados.',
      en: 'Every itinerary leaves time to discover, without filling each hour with transfers.',
    },
  },
  {
    titulo: { es: 'Precio claro antes de pagar', en: 'Clear pricing before you pay' },
    descripcion: {
      es: 'Te mostramos qué incluye y qué no, para que sepas exactamente en qué inviertes.',
      en: 'We show you what is included and what is not, so you know exactly what you are investing in.',
    },
  },
  {
    titulo: { es: 'Acompañamiento en el viaje', en: 'Support during the trip' },
    descripcion: {
      es: 'Si algo cambia en el camino, un asistente en español te ayuda a resolverlo.',
      en: 'If something changes along the way, a Spanish-speaking assistant helps you sort it out.',
    },
  },
];

export const TESTIMONIOS: {
  nombre: string;
  ciudad: string;
  destino: Bilingue;
  texto: Bilingue;
}[] = [
  {
    nombre: 'Valentina Restrepo',
    ciudad: 'Medellín',
    destino: { es: 'Cartagena', en: 'Cartagena' },
    texto: {
      es: 'Nos ayudaron a elegir el hotel y las islas en un solo chat. Llegamos sin preocupaciones y con planes para cada tarde.',
      en: 'They helped us choose the hotel and the islands in a single chat. We arrived worry-free with plans for every afternoon.',
    },
  },
  {
    nombre: 'Andrés Molina',
    ciudad: 'Bogotá',
    destino: { es: 'Cusco y Machu Picchu', en: 'Cusco and Machu Picchu' },
    texto: {
      es: 'Me explicaron con paciencia lo de la altitud y el tren. El día en Machu Picchu fue el mejor de mi vida, sin filas ni improvisación.',
      en: 'They patiently explained the altitude and the train to me. The day at Machu Picchu was the best of my life, with no lines and no improvising.',
    },
  },
  {
    nombre: 'Camila Duarte',
    ciudad: 'Lima',
    destino: { es: 'París', en: 'Paris' },
    texto: {
      es: 'Viajé con mi mamá por primera vez a Europa. Cada detalle estaba pensado para que disfrutáramos y no para correr.',
      en: 'I traveled with my mom to Europe for the first time. Every detail was planned so we could enjoy it instead of rushing.',
    },
  },
];

export const FAQ_INICIO: Faq[] = [
  {
    pregunta: {
      es: '¿Cómo sé cuánto cuesta un paquete?',
      en: 'How do I know how much a package costs?',
    },
    respuesta: {
      es: 'El precio depende de las fechas, la cantidad de viajeros y la categoría del hotel. Escríbenos por WhatsApp y te enviamos tu propuesta con el precio final.',
      en: 'The price depends on the dates, the number of travelers and the hotel category. Message us on WhatsApp and we will send your proposal with the final price.',
    },
  },
  {
    pregunta: {
      es: '¿Desde qué ciudades puedo viajar?',
      en: 'Which cities can I travel from?',
    },
    respuesta: {
      es: 'Trabajamos con viajeros de toda Colombia y Latinoamérica. El tiquete aéreo se cotiza según tu ciudad de origen y la fecha.',
      en: 'We work with travelers from all over Colombia and Latin America. The flight is quoted based on your departure city and date.',
    },
  },
  {
    pregunta: {
      es: '¿Puedo cambiar el itinerario o las fechas?',
      en: 'Can I change the itinerary or the dates?',
    },
    respuesta: {
      es: 'Sí. Si quieres ajustar días, agregar una ciudad o cambiar de hotel, lo revisamos contigo por WhatsApp antes de confirmar.',
      en: 'Yes. If you want to adjust days, add a city or change hotels, we review it with you on WhatsApp before confirming.',
    },
  },
  {
    pregunta: {
      es: '¿Me ayudan con los documentos y la visa?',
      en: 'Can you help with documents and visas?',
    },
    respuesta: {
      es: 'Te damos la lista de requisitos según tu pasaporte y destino, y te orientamos en cada paso para que llegues con todo listo.',
      en: 'We give you the list of requirements based on your passport and destination, and guide you through each step so you arrive fully prepared.',
    },
  },
  {
    pregunta: {
      es: '¿Qué pasa si necesito ayuda durante el viaje?',
      en: 'What if I need help during the trip?',
    },
    respuesta: {
      es: 'Tienes un número de asistencia en español disponible las 24 horas, durante todo tu viaje.',
      en: 'You have a Spanish-speaking assistance number available 24 hours a day for the whole trip.',
    },
  },
];
