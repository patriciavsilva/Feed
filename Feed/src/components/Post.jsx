import styles from './Post.module.css';

export function Post() {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://media.licdn.com/dms/image/C4E03AQE-uyWEIzRKyw/profile-displayphoto-shrink_800_800/0/1654802855188?e=1691020800&v=beta&t=PCHiaSYm1oecdWFFrkvUd7RYOCtxfoHd8JuDDCPLMLM" />
          <div className={styles.authorInfo}>
            <strong>Patricia Vieira</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time
          title='06 de Junho de 2022 às 15h30'
          dateTime="2022-06-06 15:33:00"
        >
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href=""> jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}