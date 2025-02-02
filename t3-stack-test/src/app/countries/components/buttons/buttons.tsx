"use client"
import Link from 'next/link'
import * as types from '../../../types'
import styles from'./buttons.module.css'

export interface UserpageProps{
    UserData: types.userInfo
}

export const Buttons: React.FC<UserpageProps> = (props) => {
    const {UserData} = {...props}
    return (
        <main>
            <Link href='http://localhost:3000' ><button className={styles.btn}>{UserData.back}</button></Link>
        </main> 
    );
}