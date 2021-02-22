import { useRouter } from 'next/router'
import { getGirl, getGirlByUid } from '../../lib/api'
import styles from '../../styles/components/Home.module.scss'


export default function Post({ girl, preview }) {
  const { name, height } = girl.edges[0].node

  return (
    <div className="container">
      <div className={styles.imageContainer}>
      <span className={styles.title}>{name[0].text}</span>
      </div>
      {height}
    </div>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getGirlByUid(params.uid, previewData)

  return {
    props: {
      preview,
      girl: data?.allGirls ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allGirls = await getGirl()

  return {
    paths: allGirls?.map(({ node }) => `/girl/${node._meta.uid}`) || [],
    fallback: true,
  }
}
