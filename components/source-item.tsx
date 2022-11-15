import {Source} from '../types/hard-skills';
import styles from '../styles/Source.module.scss';

type SourceItemProps = {
  source: Source
};

function SourceItem({source}: SourceItemProps): JSX.Element {
  const {link, name, tags, date, description} = source;

  return (
    <article className={styles.source}>
      <p className={styles.source__title}>{name}</p>
      <a className={styles.source__link} href={link} target="_blank">
        {link}
      </a>

      { description ? <p className={styles.source__desc}>{description}</p> : ''}

      <ul className={styles.source__tags}>
        {
          tags.map((tag) => (
            <li className={styles.source__tag} key={tag}>{tag}</li>
          ))
        }
      </ul>

      <time className={styles.source__date}>{date}</time>
    </article>
  )
}

export default SourceItem;
