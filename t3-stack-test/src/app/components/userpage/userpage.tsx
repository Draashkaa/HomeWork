import * as types from '../../types'
import { Buttons } from '../buttons/buttons'
import styles from'./userpage.module.css'
import Image from 'next/image'

export interface UserpageProps{
    UserPageComponents: types.userCardComponents,
    UserData: types.userInfo
}

export const Userpage: React.FC<UserpageProps> = (props) => {
  const {UserData, UserPageComponents} = {...props}
  const Skills = UserPageComponents.Skills
  return (
    <main className={styles.main}>
    <Image className = {styles.avatar} src={UserData.avatarSrc} alt = 'user`s avatar'/>
    <h1 className={styles.TextHeading}>{UserData.name}<Image className = {styles.checkmark} src={UserData.CheckMarkSrc} alt = 'user`s checkmark'/></h1>
    <h2 className={styles.TextMain}>{UserData.JobTitle}</h2>
    <Buttons UserData={UserData}/>
    <Skills SkillsArray={UserData.skills}/>
    <h2 className={styles.TextMain}><Image className = {styles.clock} src={UserData.ClockSrc} alt = 'clock`s icon'/>{UserData.Joined}</h2>
    </main>
  );
}