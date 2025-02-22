'use client'
import { Userpage } from './components/userpage/userpage';
import styles from'./index.module.css'
import * as Data from '../Data'
import * as CountriesData from '../countries'

const Home = () => {

  return (
    <main className={styles.main}>
      <Userpage UserData={Data.UserData} UserPageComponents={Data.userCardComponents} CountriesData={CountriesData.countriesData}/>
    </main>
  );
}

export default Home

