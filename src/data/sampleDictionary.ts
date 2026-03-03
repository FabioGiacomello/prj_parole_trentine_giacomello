import { DictionaryEntry } from '@/types/dictionary';

// Dati di esempio - verranno sostituiti con l'importazione da Excel
export const sampleDictionary: DictionaryEntry[] = [
  {
    id: '1',
    dialectWord: 'balot',
    italianWord: 'ragazzo',
    category: 'sostantivo',
    gender: 'maschile',
    number: 'singolare',
    definition: 'Giovane maschio, ragazzo',
    examples: [
      'El balot l\'è ndat a scola.',
      'Quel balot là l\'è proprio bravo.'
    ],
    relatedWords: ['balota', 'balotin'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    dialectWord: 'balota',
    italianWord: 'ragazza',
    category: 'sostantivo',
    gender: 'femminile',
    number: 'singolare',
    definition: 'Giovane femmina, ragazza',
    examples: [
      'La balota la canta ben.',
      'Che bela balota!'
    ],
    relatedWords: ['balot', 'balotin'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    dialectWord: 'ciuciàr',
    italianWord: 'succhiare',
    category: 'verbo',
    definition: 'Aspirare con la bocca un liquido o altro',
    examples: [
      'El bambin el ciucia el deo.',
      'Ciucia \'n po\' de aqua.'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    dialectWord: 'sgiaf',
    italianWord: 'schiaffo',
    category: 'sostantivo',
    gender: 'maschile',
    number: 'singolare',
    definition: 'Colpo dato con la mano aperta sulla guancia',
    examples: [
      'L\'à molà \'n sgiaf.',
      'Te meriti \'n sgiaf!'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    dialectWord: 'tananài',
    italianWord: 'formiche',
    category: 'sostantivo',
    gender: 'femminile',
    number: 'plurale',
    definition: 'Piccoli insetti sociali della famiglia delle Formicidae',
    examples: [
      'I tananài i porta via el magnàr.',
      'Gh\'è pién de tananài en cusina.'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6',
    dialectWord: 'bèl',
    italianWord: 'bello',
    category: 'aggettivo',
    gender: 'maschile',
    number: 'singolare',
    definition: 'Che ha qualità estetiche gradevoli',
    examples: [
      'Che bèl paese!',
      'L\'è \'n om bèl.'
    ],
    relatedWords: ['bèla', 'bèi'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '7',
    dialectWord: 'gnènt',
    italianWord: 'niente',
    category: 'pronome',
    definition: 'Nessuna cosa',
    examples: [
      'No gh\'è gnènt da far.',
      'Gnènt de nòf sot el sol.'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '8',
    dialectWord: 'mas-cio',
    italianWord: 'mazzo',
    category: 'sostantivo',
    gender: 'maschile',
    number: 'singolare',
    definition: 'Fascio, gruppo di oggetti legati insieme',
    examples: [
      '\'N mas-cio de fiori.',
      'Te dò \'n mas-cio de ciave.'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '9',
    dialectWord: 'stòria',
    italianWord: 'storia',
    category: 'sostantivo',
    gender: 'femminile',
    number: 'singolare',
    definition: 'Racconto, narrazione di eventi passati',
    examples: [
      'Conteme na stòria.',
      'Che bèla stòria!'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '10',
    dialectWord: 'sgnacolàr',
    italianWord: 'piagnucolare',
    category: 'verbo',
    definition: 'Piangere sommessamente e con insistenza',
    examples: [
      'El bambin el sgnacolèa.',
      'Basta sgnacolàr!'
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
