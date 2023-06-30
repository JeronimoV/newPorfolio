import styles from "./presentation.module.css";

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <div className={styles.textContainer}>
          <h1>Jeronimo Vilar</h1>
          <h2>Full Stack Web Developer</h2>
          <div className={styles.button}>
              <p className={styles.buttonTitle}>Touch to expand!</p>
              <p className={styles.hiddenButtonTitle}>Sobre mi</p>
              <p className={styles.buttonText}>Hola, soy Jeronimo Vilar, soy de Argentina, Buenos Aires, soy Desarrollador Web FullStack con 20 años.
  Me encanta programar, mi sueño es encontrar un trabajo para seguir aprendiendo. Mi objetivo ahora es encontrar un trabajo para ganar experiencia, ¡quiero ser un desarrollador sénior algún día!</p>
          </div>
        </div>
        <img className={styles.image} src="/foto.png" />
      </div>
    </div>
  );
};

export default Presentation;
