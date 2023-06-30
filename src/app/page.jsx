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
            <div id="inicio"><Presentation/></div>
            <div id="tecnologias"><Technologies/></div>
            <div id="proyectos"><Projects/></div>
            <div id="contactos"><Contact/></div>
        </div>
    )
}

export default Landing