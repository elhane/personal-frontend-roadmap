// import UnderConstruction from '../components/under-construction';
import {useState} from 'react';
import SourcesList from '../components/sourcesList';
import TopicsList from '../components/topicsList';

const sources = [
  {
    link: 'https://code-basics.com/ru/languages/typescript',
    name: 'TypeScript как второй язык [code-basics, hexlet]',
    tags: ['TypeScript', 'JavaScript'],
    date: '11.11.2022',
    id: 0
  },
  {
    link: 'https://code-basics.com/ru/languages/typescript',
    name: 'Оценка сложности алгоритмов [ULearn.me]',
    tags: ['algorithm'],
    date: '9.11.2022',
    id: 1
  }
];

function HardSkills():JSX.Element {
  const [links, setLinks] = useState(sources);
  const [topics, setTopics] = useState([
    {name: 'сборка на webpack', isDone: true},
    {name: 'повторять алгоритмы', isDone: false}
  ]);

  return (
    <main className="main container">
      <section className="page">
        <h1 className="page__title">Hard Skills sources</h1>

        <section className="page__content page__content--columns">

          <section className="sources-section page__column">
            <SourcesList sources={links} setLinks={setLinks}/>
          </section>

          <section className="brush-up-section page__column">
            <TopicsList topics={topics} setTopics={setTopics}/>
          </section>

        </section>
      </section>
    </main>
  )
}

export default HardSkills;
