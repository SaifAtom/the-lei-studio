// Photos live in public/images. BASE_URL keeps the paths correct when the
// site is hosted under a sub-path (GitHub Pages).
const BASE = import.meta.env.BASE_URL
export const LOGO = `${BASE}logo.jpeg`
const gainage = `${BASE}images/gainage.jpeg`
const capsulesNailArt = `${BASE}images/capsules-nailart.jpeg`
const nailArtArtisanal = `${BASE}images/nailart-artisanal.jpeg`
const capsulesDelicat = `${BASE}images/capsules-delicat.jpeg`
const reconstruction = `${BASE}images/reconstruction.jpeg`

export const CONTACT = {
  whatsapp: '+216 29 166 720',
  whatsappHref: 'https://wa.me/21629166720',
  phone: '+216 27 454 112',
  phoneHref: 'tel:+21627454112',
  mapsLink: 'https://maps.app.goo.gl/X6YWVvPwbLVGaFSW6',
  mapsEmbed:
    'https://maps.google.com/maps?q=36.8754948,10.1805517&z=17&hl=fr&output=embed',
}

export const ABOUT = {
  title: 'L’expertise française, désormais à Tunis.',
  paragraphs: [
    'Formée et certifiée en France dans les techniques les plus exigeantes de la beauté des ongles, je vous accueille dans un univers dédié à la précision, au détail et à l’élégance.',
    'Spécialisée dans le travail exclusivement au gel, je maîtrise notamment la manucure russe, la pédicure russe, le gainage et le Full Nail Art, ainsi que les techniques de pédicure médicale.',
    'Chaque prestation est réalisée avec une exigence particulière afin d’allier précision, esthétique et respect de l’ongle naturel.',
    'Nous travaillons exclusivement avec des produits professionnels français, sélectionnés pour leur qualité, et plaçons l’hygiène au cœur de chaque prestation. Chaque instrument est soigneusement nettoyé, désinfecté et stérilisé entre chaque rendez-vous.',
  ],
  signature: ['Une expertise française.', 'Une signature unique.'],
}

export const SERVICES = [
  {
    title: 'Gainage sur ongle naturel & Manucure russe',
    text: 'Un travail de précision jusque dans les moindres détails : cuticules parfaitement travaillées, élimination des peaux mortes et gainage de l’ongle naturel pour un résultat propre, net et élégant.',
    image: gainage,
  },
  {
    title: 'Capsules & Nail Art',
    text: 'Des extensions travaillées avec précision pour créer des looks personnalisés, sublimés par un Nail Art minutieux et créatif.',
    image: capsulesNailArt,
  },
  {
    title: 'Capsules & Nail Art artisanal',
    text: 'Ici, chaque détail est réalisé à la main. Des créations entièrement personnalisées où la finesse du dessin et le travail des volumes donnent vie à des poses uniques.',
    image: nailArtArtisanal,
  },
  {
    title: 'Capsules gel & Nail Art délicat',
    text: 'Une extension au gel pour apporter longueur et structure, accompagnée d’une touche de Nail Art subtile. L’équilibre parfait entre sophistication et simplicité.',
    image: capsulesDelicat,
  },
  {
    title: 'Reconstruction de l’ongle & Manucure russe',
    text: 'Redonner forme et harmonie à l’ongle grâce à un travail de reconstruction précis, associé à une manucure russe soignée pour une finition nette et parfaitement structurée.',
    image: reconstruction,
  },
]

export const PRICES = [
  {
    category: 'Côté mains',
    items: [
      { name: 'Capsule gel', price: 70 },
      { name: 'Chablon', price: 85 },
      { name: 'Gainage ongle naturel', price: 50 },
      { name: 'Remplissage', price: 45 },
      { name: 'Remplissage capsule gel', price: 45 },
      { name: 'Vernis permanent', price: 35 },
      { name: 'Manucure russe', price: 15 },
      { name: 'French', price: 10 },
      { name: 'Ongle cassé', price: 5 },
      { name: 'Dépose', price: 10 },
      {
        name: 'Soins des mains',
        price: 30,
        note: 'Gommage, manucure russe, hydratation intense · Produits Indigo & Victoria Vynn',
      },
    ],
  },
  {
    category: 'Nail Art',
    items: [
      { name: 'French', price: 10 },
      { name: 'Baby boomer / Baby color', price: 15 },
      { name: 'Effet 3D · Effet chrome · Design main', price: null },
      { name: 'Strass / Bijoux', price: null },
      { name: 'Nail Art personnalisé', price: null },
    ],
  },
  {
    category: 'Pédicure',
    items: [
      { name: 'Vernis permanent', price: 25 },
      {
        name: 'Soins des pieds',
        price: 35,
        note: 'Gommage, travail des peaux mortes, hydratation intense · Produits Indigo & Victoria Vynn',
      },
      {
        name: 'Soins médicaux',
        price: 55,
        note: 'Gommage, manucure russe, travail des cors et peaux mortes, hydratation intense · Indigo & Victoria Vynn',
      },
      { name: 'Rallongement', price: 5 },
      { name: 'Reconstruction acrygel', price: null },
    ],
  },
]

export const INFOS = [
  'Nous travaillons exclusivement avec des produits européens.',
  'La prise de rendez-vous s’effectue via WhatsApp ou par téléphone.',
  'Tout retard de plus de 30 minutes entraîne l’annulation du rendez-vous.',
  'L’annulation d’un rendez-vous sans justification entraîne l’inscription sur notre liste noire.',
  'Les accompagnateurs sont acceptés, mais pas les enfants.',
]
