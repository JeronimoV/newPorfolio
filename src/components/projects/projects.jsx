import styles from "./projects.module.css"

const Projects = () => {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.image} src="/viztaFoto.PNG"/>
                <p className={styles.title}>Vizta (No responsive)</p>
                <p className={styles.description}>Hice este proyecto con un grupo de 5 personas. Me dedique a la parte del Backend, al finalizar el Backend me pase al FrontEnd a terminar la aplicacion. Para resumir lo que es la aplicacion, seria un tipo de marketplace de Facebook, cada persona puede vender a los demas y nosotros actuamos solo como intermediarios y sin sacar ningun beneficio</p>
                <div className={styles.tecnologias}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"/>
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png"/>
                </div>
                <div className={styles.buttons}>
                    <a href="https://github.com/storevizta/vizta" className={styles.button}><img className={styles.buttonIMG} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>GitHub</a>
                    <a href="https://viztastore.onrender.com" className={styles.button}><img className={styles.buttonIMG} src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-the-internet-png-cones-download-gratuit-png-21.png"/>Deploy</a>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.image} src="/clickCounterFoto.PNG"/>
                <p className={styles.title}>Global Click Counter</p>
                <p className={styles.description}>Es un contador de clicks que muestra en tiempo real la cantidad de clicks que hicieron los usuarios en el botón. Es un proyecto sencillo pero es más que nada para demostrar conocimientos en uso de WebSockets</p>
                <div className={styles.tecnologias}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"/>
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png"/>
                </div>
                <div className={styles.buttons}>
                    <a href="https://github.com/JeronimoV/Global-Click-Counter" className={styles.button}><img className={styles.buttonIMG} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>GitHub</a>
                    <a href="https://globalclickcounter.up.railway.app" className={styles.button}><img className={styles.buttonIMG} src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-the-internet-png-cones-download-gratuit-png-21.png"/>Deploy</a>
                </div>
            </div>
            <div className={styles.card}>
                <img className={styles.image} src="/wasapFoto.PNG"/>
                <p className={styles.title}>Wasap (No responsive)</p>
                <p className={styles.description}>Es un servicio de mensajeria a tiempo real.
Esta version que esta en el deploy sufrio un bug que solo te deja ver el primer chat que toques, actualmente lo arregle pero como excedi mi cuota maxima en Railway, no puedo actualizarlo, apenas puedo, subo el proyecto arreglado!</p>
                <div className={styles.tecnologias}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"/>
                    <img src="https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png"/>
                </div>
                <div className={styles.buttons}>
                    <a href="https://github.com/JeronimoV/wasap" className={styles.button}><img className={styles.buttonIMG} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>GitHub</a>
                    <a href="https://wasap-production-7c5f.up.railway.app/login" className={styles.button}><img className={styles.buttonIMG} src="https://www.freepnglogos.com/uploads/logo-internet-png/logo-internet-the-internet-png-cones-download-gratuit-png-21.png"/>Deploy</a>
                </div>
            </div>
        </div>
    )
}

export default Projects