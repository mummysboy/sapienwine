import { Wine } from '@/context/CartContext'

export const wines: Wine[] = [
  {
    id: '0',
    name: '2021 Pinot Noir',
    type: 'red',
    price: 89.99,
    image: '/Pinot+2021.webp',
    description: 'Crafted from premium Sta. Rita Hills fruit, this 2021 Pinot Noir impresses with its vibrant acidity, red fruit, and subtle earthiness. Though I can\'t name the vineyard, it\'s unmistakable in quality—a win for Sapien Wine, and a missed opportunity for them.',
    region: 'Sta. Rita Hills, California',
    year: 2021,
    notes: [
      'Vibrant acidity with bright red fruit character',
      'Subtle earthiness and mineral undertones',
      'Aged on lees for 17 months',
      '50% new French oak, 50% neutral oak',
      'Bottle unfined and unfiltered for purity',
      'Ready to drink but will age beautifully'
    ],
    pairings: ['Grilled quail', 'Pulled or char siu pork', 'Seared salmon', 'Tuna', 'Spiced dishes', 'Barbecue']
  },
  {
    id: '1',
    name: 'Château Margaux 2018',
    type: 'red',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=1000&fit=crop',
    description: 'A legendary Bordeaux with exceptional depth and complexity. Notes of blackcurrant, cedar, and violets.',
    region: 'Bordeaux, France',
    year: 2018,
    notes: [
      'Rich blackcurrant and cassis on the nose',
      'Elegant cedar and tobacco undertones',
      'Delicate floral notes of violets',
      'Silky tannins with exceptional length',
      'Complex finish with hints of graphite'
    ],
    pairings: ['Prime rib', 'Lamb chops', 'Aged cheeses', 'Dark chocolate']
  },
  {
    id: '2',
    name: 'Dom Pérignon Vintage 2012',
    type: 'sparkling',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=1000&fit=crop',
    description: 'Elegant and refined champagne with notes of white flowers, citrus, and brioche.',
    region: 'Champagne, France',
    year: 2012,
    notes: [
      'Aromas of white flowers and citrus zest',
      'Creamy brioche and toasted almond',
      'Fine, persistent bubbles',
      'Balanced acidity with mineral notes',
      'Long, elegant finish'
    ],
    pairings: ['Oysters', 'Caviar', 'Lobster', 'Celebratory occasions']
  },
  {
    id: '3',
    name: 'Cloudy Bay Sauvignon Blanc 2022',
    type: 'white',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=1000&fit=crop',
    description: 'Crisp and vibrant with tropical fruit flavors and a refreshing acidity.',
    region: 'Marlborough, New Zealand',
    year: 2022,
    notes: [
      'Bright passionfruit and grapefruit',
      'Fresh cut grass and herbaceous notes',
      'Zesty lime and citrus',
      'Crisp, refreshing acidity',
      'Clean, mineral finish'
    ],
    pairings: ['Goat cheese', 'Grilled fish', 'Salads', 'Sushi']
  },
  {
    id: '4',
    name: 'Opus One 2019',
    type: 'red',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=1000&fit=crop',
    description: 'A powerful Napa Valley blend with rich dark fruit and velvety tannins.',
    region: 'Napa Valley, USA',
    year: 2019,
    notes: [
      'Intense blackberry and black cherry',
      'Rich dark chocolate and espresso',
      'Velvety, well-integrated tannins',
      'Hints of vanilla and oak spice',
      'Powerful, lingering finish'
    ],
    pairings: ['Filet mignon', 'Rack of lamb', 'Mushroom risotto', 'Dark chocolate desserts']
  },
  {
    id: '5',
    name: 'Domaine Leflaive Puligny-Montrachet 2020',
    type: 'white',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=1000&fit=crop',
    description: 'Elegant Burgundy with notes of citrus, white flowers, and minerality.',
    region: 'Burgundy, France',
    year: 2020,
    notes: [
      'Delicate citrus and white peach',
      'Floral notes of acacia and jasmine',
      'Distinctive minerality and chalk',
      'Elegant, refined structure',
      'Long, complex finish'
    ],
    pairings: ['Scallops', 'Lobster', 'Butter-poached fish', 'Brie cheese']
  },
  {
    id: '6',
    name: 'Veuve Clicquot Yellow Label',
    type: 'sparkling',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=1000&fit=crop',
    description: 'Classic champagne with bright fruit flavors and a creamy finish.',
    region: 'Champagne, France',
    year: 2021,
    notes: [
      'Bright apple and pear fruit',
      'Toasty brioche and vanilla',
      'Vibrant, lively bubbles',
      'Creamy, rounded mouthfeel',
      'Fresh, balanced finish'
    ],
    pairings: ['Fried chicken', 'Sushi', 'Soft cheeses', 'Brunch dishes']
  },
  {
    id: '7',
    name: 'Penfolds Grange 2017',
    type: 'red',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=1000&fit=crop',
    description: 'Australia\'s most celebrated wine with intense dark fruit and spice.',
    region: 'Barossa Valley, Australia',
    year: 2017,
    notes: [
      'Concentrated blackberry and plum',
      'Exotic spices and licorice',
      'Dense, powerful structure',
      'Rich mocha and dark chocolate',
      'Intense, opulent finish'
    ],
    pairings: ['Grilled steak', 'Venison', 'Strong cheeses', 'Barbecue']
  },
  {
    id: '8',
    name: 'Sancerre Domaine Vacheron 2021',
    type: 'white',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=1000&fit=crop',
    description: 'Crisp and mineral-driven Sauvignon Blanc with citrus and herbal notes.',
    region: 'Loire Valley, France',
    year: 2021,
    notes: [
      'Zesty lemon and grapefruit',
      'Fresh herbs and cut grass',
      'Flinty, mineral character',
      'Racy, bright acidity',
      'Clean, precise finish'
    ],
    pairings: ['Goat cheese', 'Oysters', 'Grilled vegetables', 'Light seafood']
  },
  {
    id: '9',
    name: 'Champagne Krug Grande Cuvée',
    type: 'sparkling',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=1000&fit=crop',
    description: 'Complex and rich with layers of flavor and exceptional length.',
    region: 'Champagne, France',
    year: 2020,
    notes: [
      'Rich honey and dried fruit',
      'Toasted nuts and spice',
      'Layered, complex aromatics',
      'Full-bodied, creamy texture',
      'Exceptionally long finish'
    ],
    pairings: ['Foie gras', 'Truffle dishes', 'Rich seafood', 'Special celebrations']
  },
  {
    id: '10',
    name: 'Caymus Cabernet Sauvignon 2020',
    type: 'red',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=1000&fit=crop',
    description: 'Full-bodied Napa Cabernet with dark cherry and chocolate notes.',
    region: 'Napa Valley, USA',
    year: 2020,
    notes: [
      'Ripe dark cherry and blackberry',
      'Dark chocolate and mocha',
      'Supple, smooth tannins',
      'Warm vanilla and oak',
      'Rich, satisfying finish'
    ],
    pairings: ['Ribeye steak', 'Braised short ribs', 'Aged cheddar', 'Chocolate cake']
  },
  {
    id: '11',
    name: 'Château d\'Yquem 2015',
    type: 'white',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=1000&fit=crop',
    description: 'Legendary Sauternes with honey, apricot, and incredible complexity.',
    region: 'Bordeaux, France',
    year: 2015,
    notes: [
      'Luscious honey and apricot',
      'Candied orange and pineapple',
      'Botrytis complexity and spice',
      'Rich, unctuous texture',
      'Endless, layered finish'
    ],
    pairings: ['Foie gras', 'Crème brûlée', 'Blue cheese', 'Fruit tarts']
  },
  {
    id: '12',
    name: 'Rosé de Provence Château d\'Esclans',
    type: 'rose',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=1000&fit=crop',
    description: 'Elegant and dry rosé with notes of strawberry and citrus.',
    region: 'Provence, France',
    year: 2022,
    notes: [
      'Fresh strawberry and raspberry',
      'Citrus zest and white flowers',
      'Crisp, dry finish',
      'Light, refreshing body',
      'Mineral undertones'
    ],
    pairings: ['Salmon', 'Mediterranean cuisine', 'Light salads', 'Soft cheeses']
  },
]

