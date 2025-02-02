'use client'
import { Userpage } from './components/userpage/userpage';
import styles from'./index.module.css'
import * as Data from '../Data'
import * as CountriesData from '../countries'
import {useEffect, useState} from 'react';
import { type Story } from '~/components/Toggle/types';
import axios from 'axios';


const API = "https://hn.algolia.com/api/v1/search"

const Home = () => {
  const [data, setData] = useState<Story[]>([]);
  const [search, setSearch] = useState<string>('');
  const [ActivSearch, setActivSearch] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(`${API}?query=${ActivSearch}`)
      setData(result.data.hits)
    }

    void fetchData()

  }
  ,[ActivSearch])

  
  return (
    <main className={styles.main}>
      <Userpage UserData={Data.UserData} UserPageComponents={Data.userCardComponents} CountriesData={CountriesData.countriesData}/>
    </main>
  );
}

export default Home

