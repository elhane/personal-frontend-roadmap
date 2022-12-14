import {Source} from '../../types/HardSkills';
import styles from './SourcesList.module.scss';
import SourceItem from '../SourceItem/SourceItem';

type sourceListProps = {
  sources: Source[],
  setLinks: ([]) => void
}

function SourcesList({sources, setLinks}:sourceListProps):JSX.Element {

  return (
    <>
      <div className="page__form">
        <h5 className="text-green fw-600 text-uppercase">Add source to study</h5>
        <form className="form"  onSubmit={(evt) => evt.preventDefault()}>

          <div className="form__row">
            <label className="form__label">
              <input className="form__input" type="text" placeholder="name"/>
            </label>
          </div>

          <div className="form__row">
            <label className="form__label">
              <input className="form__input" type="text" placeholder="link"/>
            </label>
          </div>
          <div className="form__row">
            <label className="form__label">
              <input className="form__input" type="text" placeholder="tags"/>
            </label>

          </div>
          <div className="form__row">
            <button
              className="form__button button button--full-width button--uppercase button--grey-600"
              onClick={() => setLinks([...sources, {
                link: 'https://code-basics.com/ru/languages/typescript3',
                name: 'новый ресурс для изучения',
                tags: ['algorithm'],
                date: '14.11.2022',
                id: 6
              }])}
            >
              add source
            </button>
          </div>
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
