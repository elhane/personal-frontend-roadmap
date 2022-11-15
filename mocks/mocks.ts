import {Source} from '../types/hard-skills';
import {Topic} from '../types/hard-skills';

export const sources: Source[] = [
  {
    link: 'https://code-basics.com/ru/languages/typescript',
    name: 'TypeScript как второй язык [code-basics, hexlet]',
    tags: ['TypeScript', 'JavaScript'],
    date: '11.11.2022',
    description: '',
    id: 0
  },
  {
    link: 'https://code-basics.com/ru/languages/typescript',
    name: 'Оценка сложности алгоритмов [ULearn.me]',
    tags: ['algorithm'],
    date: '9.11.2022',
    description: '',
    id: 1
  },
  {
    link: 'https://www.frontendmentor.io/challenges',
    name: 'Pet-projects ideas',
    tags: ['pet'],
    date: '14.11.2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum itaque nobis, officiis sunt voluptatum!',
    id: 1
  }
];

export const topics: Topic[] = [
  {name: 'сборка на webpack', isDone: true},
  {name: 'алгоритмы', isDone: false},
  {name: 'PWA', isDone: true},
  {name: 'как работает сборщик мусора js', isDone: false},
  {name: 'react.memo/useMemo/useCallback', isDone: true}
];
