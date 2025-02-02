"use client"
import Link from 'next/link'
import * as types from '../../types'
import styles from'./buttons.module.css'

export interface UserpageProps{
    UserData: types.userInfo
}

export const Buttons: React.FC<UserpageProps> = (props) => {
    const {UserData} = {...props}
    let styleConditions:Boolean = true
    const handleClick = () => {
        const main = document.querySelector("main")
        let ActualClassMAIN = main?.getAttribute('class')
        const html = document.querySelector("html")
        let ActualClassHTML = main?.getAttribute('class')
        if (styleConditions == true){
            html?.removeAttribute("class")
            html?.setAttribute("class", String(ActualClassMAIN?.concat('2')))
            main?.removeAttribute("class")
            main?.setAttribute("class", String(ActualClassMAIN?.concat('2')))
            styleConditions = false
        } else {
            html?.removeAttribute("class")
            html?.setAttribute("class", String(ActualClassMAIN?.replace('2','')))
            main?.removeAttribute("class")
            main?.setAttribute("class",String(ActualClassMAIN?.replace('2','')))
            styleConditions = true
        }
        console.log(styleConditions)
    };
    return (
        <main>
            <button onClick={handleClick}  className={styles.btn}>{UserData.change}</button>
            <Link href='http://localhost:3000/countries'><button className={styles.btn}>{UserData.country}</button></Link>
            <Link href='http://localhost:3000/ContactUs'><button className={styles.btn}>{UserData.country}</button></Link>
        </main> 
    );
}
