import {Topic} from '../types/hard-skills';
import styles from '../styles/TopicsList.module.scss';
import {ChangeEvent, useState} from 'react';

type TopicsListProps = {
  topics: Topic,
  setTopics: ([]) => void
}

function TopicsList({topics, setTopics}: TopicsListProps): JSX.Element {
  const [formData, setFormData] = useState({})

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.currentTarget;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: target.checked
    });
  }

  return (
    <>
      <h5>
        Add topics to repeat:
      </h5>
      <div>
        <form action="" onSubmit={(evt) => evt.preventDefault()}>

          <label>
            name <input type="text"/>
          </label>

          <button onClick={() => setTopics([...topics, 'eded'])}>
            add topic
          </button>
        </form>

        <ul className={styles.topics}>
          {
            topics.map((topic) => (
              <li className={styles.topics__item} key={topic}>

                <label className="checkbox">
                  <input
                    name={topic}
                    className="checkbox__input"
                    type="checkbox"
                    value={topic}
                    onChange={handleFieldChange}
                  />
                  <span className="checkbox__emulator"></span>
                  {topic}
                </label>

              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default TopicsList;
