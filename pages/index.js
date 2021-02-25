import Head from 'next/head'
import Link from "next/link"
import { client } from "../prismic-configuration";
import styles from '../styles/components/index.module.scss'

export default function Home({home}) {
  return (
    <div className="container-full">
       <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <Link href="/">
          <a>
            <img src="/logo.svg" className={styles.logo} />
          </a>
        </Link>
        <div className={styles.col}>
            <Link href="/good">
              <a className={styles.link}>
                <span className={styles.holder}>
                  <img src={home.data.good_girl.url} className={styles.image}/>
                  <span className={styles.title}>Good Girl</span>
                </span>
              </a>
            </Link>
        </div>
         <div className={styles.col}>
           <Link href="/bad">
              <a className={styles.link}>
                <span className={styles.holder}>
                  <img src={home.data.bad_girl.url}  className={styles.image}/>
                  <span className={styles.title}>Bad Girl</span>
                </span>
              </a>
            </Link>
        </div>  
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const home = await client.getSingle("home")

  return {
    props: {
      home
    },
  }
}
