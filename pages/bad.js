import { client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Link from "next/link"
import Layout from '../components/Layout'
import styles from '../styles/components/list.module.scss'

function bad({ data }) {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    {
                        data.results.map((item, index) => 
                            <div className={styles.item} key={index}>
                                <Link href={`/girl/${encodeURIComponent(item.uid)}`}>
                                    <a  className={styles.link}>
                                        <img src={item.data.main_image.url} alt={item.data.main_image.alt} className={styles.image}/>
                                        <span className={styles.title}>{item.data.name[0].text}</span>
                                    </a>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await client.query(
        Prismic.Predicates.any('my.girl.type', ['Bad']) 
    );

    return {
        props: { data },
    };
}

export default bad
