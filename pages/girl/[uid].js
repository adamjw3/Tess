import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

import styles from '../../styles/components/Home.module.scss'


export default function Post({ data }) {
  console.log(data.name[0].text);
  return (
    <div className="container">
      <div className={styles.imageContainer}>
        {data.name[0].text}
      </div>
    </div>
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
