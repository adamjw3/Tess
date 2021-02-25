import Head from 'next/head'
import { client } from "../prismic-configuration";
import styles from '../styles/components/home.module.scss'

export default function Home({home}) {
  return (
    <div className="container-full">
       <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
         <img src="/logo.svg" className={styles.logo} />
        <div className={styles.col}>
            <a href="/" className={styles.link}>
              <span className={styles.holder}>
                <img src={home.data.good_girl.url} className={styles.image}/>
                <span className={styles.title}>Good Girl</span>
              </span>
            </a>
        </div>
         <div className={styles.col}>
           <a href="/" className={styles.link}>
              <span className={styles.holder}>
                <img src={home.data.bad_girl.url}  className={styles.image}/>
                <span className={styles.title}>Bad Girl</span>
              </span>
            </a>
        </div>  
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const home = await client.getSingle("home")
  console.log("home", home)
  return {
    props: {
      home
    },
  }
}
