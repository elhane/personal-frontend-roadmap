import {Source} from '../types/hard-skills';
import styles from '../styles/Source.module.scss';

type SourceItemProps = {
  source: Source
};

function SourceItem({source}: SourceItemProps): JSX.Element {
  const {link, name, tags, date} = source;

  return (
    <article className={styles.source}>
      <a className={styles.source__link} href={link}>
        {name}
      </a>

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
