'use client'
import { Userpage } from './components/userpage/userpage';
import styles from'./index.module.css'
import * as Data from './Data'
import {useEffect, useState} from 'react';
import { type Story } from '~/components/Toggle/types';
import { StoryCard } from '~/components/Toggle/ui/Toggle';
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
      <StoryCard data={data} search={search} setSearch={setSearch} ActivSearch={ActivSearch} setActivSearch={setActivSearch}/>
      <Userpage UserData={Data.UserData} UserPageComponents={Data.userCardComponents}/>
    </main>
  );
}

export default Home

