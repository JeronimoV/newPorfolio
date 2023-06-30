"use client"

import { useEffect, useState } from "react"
import styles from "./technologies.module.css"

const Technologies = () => {

    const [isChecked, setIsChecked] = useState(null)

    const handlerCheck = (e) => {
        setIsChecked(e.target.value)
    }

    useEffect(() => {
        setIsChecked("1")
    }, [])

    if(!isChecked){
        return <p>Loading...</p>
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Tecnologias</p>
            <p className={styles.subTitles}>Front-End y Back-end</p>
            <div className={styles.sliderImages}>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="1" name="slider" type="radio" checked={isChecked === "1" ? true : false} onChange={handlerCheck}/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/></div>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="2" name="slider" type="radio" checked={isChecked === "2" ? true : false} onChange={handlerCheck}/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png"/></div>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="3" name="slider" type="radio" checked={isChecked === "3" ? true : false} onChange={handlerCheck}/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"/></div>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="5" name="slider" type="radio" checked={isChecked === "5" ? true : false} onChange={handlerCheck}/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"/></div>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="6" name="slider" type="radio" checked={isChecked === "6" ? true : false} onChange={handlerCheck}/><img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png"/></div>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="7" name="slider" type="radio" checked={isChecked === "7" ? true : false} onChange={handlerCheck}/><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/></div>
                <div className={styles.unSelectedImages}><input className={styles.inputs} value="8" name="slider" type="radio" checked={isChecked === "8" ? true : false} onChange={handlerCheck}/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/></div>
            </div>
        </div>
    )
}

export default Technologies