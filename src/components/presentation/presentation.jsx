import styles from "./presentation.module.css";

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.description}>
          <h1>Jeronimo Vilar</h1>
          <h2>FullStack Web Developer</h2>
        </div>
        <img src="./fotoCaraAmarilla.png"/>
      </div>
      <div className={styles.buttonContainer}>
        <p className={styles.button}>Click to expand!</p>
        <div className={styles.hiddenText}>
          <p className={styles.title}>Sobre Mi</p>
          <p className={styles.text}>Hola, soy Jeronimo Vilar, soy de Argentina, Buenos Aires, soy Desarrollador Web FullStack con 20 años.
          Me encanta programar, mi sueño es encontrar un trabajo para seguir aprendiendo. Mi objetivo ahora es encontrar un trabajo para ganar experiencia, ¡quiero ser un desarrollador sénior algún día!</p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
