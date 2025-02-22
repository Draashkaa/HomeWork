'use client'
import { Userpage } from './components/userpage/userpage';
import styles from'./index.module.css'
import * as Data from './Data'

const Home = () => {
  return (
    <main className={styles.main}>
      <Userpage UserData={Data.UserData} UserPageComponents={Data.userCardComponents}/>
    </main>
  );
}

export default Home

