import styles from './HomePage.module.scss';
import mainPic from '../../images/main-pic.svg';

function HomePage() {
  return (
    <div className="container">

      <main className={styles.main}>
        <div className={styles.main__info}>
          <h1 className={styles.main__title}>
            Personal<span>Frontend Roadmap</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at autem, blanditiis eaque error fuga labore, laborum magni, maxime odio officiis quod sed soluta? Amet asperiores ea quisquam quo tenetur!
          </p>
        </div>
        <img src={mainPic} alt="training"/>
    </main>

    </div>
  )
}

export default HomePage;
