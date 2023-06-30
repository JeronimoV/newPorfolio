import styles from "./contact.module.css"

const Contact = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Estos son todas mis redes sociales</p>
            <div className={styles.allSocialMedias}>
                <a href="https://github.com/JeronimoV" className={styles.imgContainer}><img className={styles.img} src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                <a href="https://www.linkedin.com/in/jeronimo-vilar-457295245/" className={styles.imgContainer}><img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"/></a>
                <a href="mailto:jeronimoevilar@outlook.com" className={styles.imgContainer}><img className={styles.img} src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"/></a>
                <a href="https://wa.link/ax1due" className={styles.imgContainer}><img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"/></a>
            </div>
        </div>
    )
}

export default Contact