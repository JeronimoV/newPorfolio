import Presentation from "@/components/presentation/presentation"
import Technologies from "@/components/technologies/technologies"
import Projects from "@/components/projects/projects"
import Contact from "@/components/contact/contact"
import styles from "./landing.module.css"

const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <a href="#inicio">Inicio</a>
                <a href="#tecnologias">Tecnologias</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contactos">Contacto</a>
            </div>
            <a href="https://docs.google.com/document/d/15rjEUbrL5_iWrKdEIt9fGhejirGWhsBS/edit?usp=sharing&ouid=104513528692140047356&rtpof=true&sd=true" className={styles.downloadCV}>Descargar CV</a>
            <div id="inicio"><Presentation/></div>
            <div id="tecnologias"><Technologies/></div>
            <div id="proyectos"><Projects/></div>
            <div id="contactos"><Contact/></div>
        </div>
    )
}

export default Landing