'use client'
import { type CatsCardProps, type Cats } from ".../../../t3-stack-test/src/app/types"
import { useEffect, useState } from "react"
import axios from 'axios';
import styles from '../../index.module.css'

const API = "https://api.thecatapi.com/v1/breeds"

export const CatsCard: React.FC<CatsCardProps> = (props) => {
    const [Cat, setCat] = useState<Cats>();
    const [data, setData] = useState<Cats[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(`${API}`)
          setData(result.data)
        }
        void fetchData()
      }
      ,[])

    useEffect(() => {
        let i = Math.floor(Math.random()*data.length)
        setCat(data[i]!)
      }
      ,[data])

    return (
        <div className={styles.mainDiv}>
        {Cat ? 
        <div>
        <h3>name: {Cat.name} </h3>
        <h3>life span: {Cat.life_span} years</h3>
        <h3>origin: {Cat.origin}</h3>
        <h3>weight: {Cat.weight.metric} kg</h3>
        </div>
        : <span>loading...</span>}
        <button className={styles.btn} onClick={() => setCat(data[Math.floor(Math.random()*data.length)])}>Новый котик!</button>
        </div>
    )
}