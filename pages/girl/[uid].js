import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Layout from "../../components/Layout"
import styles from '../../styles/components/girl.module.scss'


export default function Post({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className={styles.imageContainer}>
            <img src={data.main_image.url} alt={data.main_image.alt}/>
          </div>
          <div className={styles.detailsContainer}>
            <h1 className={styles.name}>{data.name[0].text}</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("girl", uid);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "girl")
  );

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
