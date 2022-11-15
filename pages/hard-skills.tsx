// import UnderConstruction from '../components/under-construction';
import {useState} from 'react';
import SourcesList from '../components/sourcesList';
import TopicsList from '../components/topicsList';
import {sources, topics} from '../mocks/mocks';

// https://habr.com/ru/company/edison/blog/479100/

function HardSkills():JSX.Element {
  const [links, setLinks] = useState(sources);
  const [topicsList, setTopicsList] = useState(topics);

  return (
    <main className="main container">
      <section className="page">
        <h1 className="page__title">Hard Skills sources</h1>

        <section className="page__content page__content--columns">

          <section className="sources-section page__column">
            <SourcesList sources={links} setLinks={setLinks}/>
          </section>

          <section className="brush-up-section page__column">
            <TopicsList topics={topics} setTopics={setTopicsList}/>
          </section>

        </section>


        {/*<div className="test">*/}
        {/*    какой-то фон*/}
        {/*</div>*/}
      </section>
    </main>
  )
}

export default HardSkills;
