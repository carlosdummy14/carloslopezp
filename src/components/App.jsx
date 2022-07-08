import styles from './App.module.css'
import carlosImage from '../images/carloslopezp.png'
import linkedinImage from '../images/linkedin.svg'
import githubImage from '../images/github.svg'
import twitterImage from '../images/twitter.svg'
import rockImage from '../images/rock-zen.png'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.image}>
          <img src={carlosImage} alt='carlos lopez' />
        </div>
        <div className={styles.info}>
          <div className={styles.greeting}>
            <span>Hi, I'm</span>
          </div>
          <h1 className={styles.title}>
            <span className={styles.firstname}>Carlos</span>
            <span className={styles.lastname}>López</span>
          </h1>
          <h3 className={styles.text}>Software Engineer {'   '} 🇲🇽</h3>
          <div className={styles.rrss}>
            <a href=''>
              <img src={linkedinImage} alt='linkedin' />
            </a>
            <a href=''>
              <img src={githubImage} alt='github' />
            </a>
            <a href=''>
              <img src={twitterImage} alt='twitter' />
            </a>
          </div>
        </div>
      </header>

      <section className={styles.sectioncontainer}>
        <article className={styles.aboutme}>
          <div>
            <h3>About me</h3>
            <h6>"Do it, but make it worth it"</h6>
            <p>
              <span className={styles['main-text']}>
                Full stack developer. HTML, CSS, JavaScript, React, Nodejs, Express, MongoDB -
                mainly.
              </span>
              <br />
              I have worked with PHP, SQL among other languages.
              <br />
              Love learning something new every day.
              <br />
              Help small businesses to be part of a digital world.
              <br />
              Grateful to God.
              <br />
              Father and I love my family.
              <br />I like soccer, board games and Magic The Gathering TCG.
            </p>
          </div>
          <div className={styles['rock-container']}>
            <div className={styles['image-circle']}></div>
            <img
              src={rockImage}
              alt='rock-zen'
              width='600px'
              height='580px'
              className={styles.rock}
            />
          </div>
        </article>
      </section>

      <section className={styles.container}>
        <div>
          <h3>More...</h3>
          <p>
            I have been involved in the different areas of the organizations where I have worked,
            either developing or implementing software products.
            <br />
            Participate in development of accounting systems, finances, human resources, payroll,
            product inventories, purchases and manufacturing.
            <br />
            The contact with the end user allowed me to identify how a software should be according
            to their needs.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
