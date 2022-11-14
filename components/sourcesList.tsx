import {Source} from '../types/hard-skills';
import styles from '../styles/SourcesList.module.scss';
import SourceItem from '../components/source-item';

type sourceListProps = {
  sources: Source[],
  setLinks: ([]) => void
}

function SourcesList({sources, setLinks}:sourceListProps):JSX.Element {

  return (
    <>
      <div>
        <h5>Add source to study</h5>
        <form action="" onSubmit={(evt) => evt.preventDefault()}>

          <label>
            name <input type="text"/>
          </label>

          <label>
            link <input type="text"/>
          </label>

          <label>
            tags <input type="text"/>
          </label>

          <button onClick={() => setLinks([...sources, {
            link: 'https://code-basics.com/ru/languages/typescript3',
            name: 'аввим jshdfkjh sdf ловыарплывопвыап ',
            tags: ['algorithm'],
            date: '14.11.2022',
            id: 6
          }])}>
            add source
          </button>
        </form>
      </div>

      <ul className={styles.sources}>
        {
          sources.map((source) => (
            <li className={styles.sources__item} key={source.id}>
              <SourceItem source={source} />
            </li>
          ))
        }

      </ul></>
  )
}

export default SourcesList;
