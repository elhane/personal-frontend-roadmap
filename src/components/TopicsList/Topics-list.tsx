import {Topic} from '../../types/HardSkills';
import styles from './TopicsList.module.scss';
import {ChangeEvent, useState} from 'react';
import Checkbox from '../Сheckbox/Checkbox';

type TopicsListProps = {
  topics: Topic[],
  setTopics: ([]) => void
}

function TopicsList({topics, setTopics}: TopicsListProps): JSX.Element {
  const [topic, setTopic] = useState("");

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTopic(evt.currentTarget.value);
  }

  return (
    <>
      <h5 className="text-green fw-600 text-uppercase">
        Add topics to repeat
      </h5>
      <div className="page__form">
        <form className="form" onSubmit={(evt) => evt.preventDefault()}>

          <div className="form__row">
            <label className="form__label">
              <input
                className="form__input"
                type="text"
                placeholder="name"
                onChange={handleInputChange}
              />
            </label>
          </div>

          <div className="form__row">
            <button
              className="form__button button button--full-width button--uppercase button--grey-600"
              onClick={() => setTopics([...topics, {name: topic, isDone: false}])}
            >
              add topic
            </button>
          </div>
        </form>
      </div>

      <ul className={styles.topics}>
        {
          topics.map(({name, isDone}) => (
            <li className={styles.topics__item} key={name}>
              <Checkbox
                key={name}
                label={name}
                checked={isDone}
                checkedClass={"crossed-out"}
              />
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default TopicsList;
