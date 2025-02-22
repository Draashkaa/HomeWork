'use client'
import styles from'./index.module.css'
import { CatsCard } from './components/Computation/Computation';

const Home = () => {

  return (
    <main className={styles.main}>
      <CatsCard/>
    </main>
  );
}

export default Home