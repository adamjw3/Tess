import React, { useEffect } from 'react';
import Carousel from "react-multi-carousel";
import Link from "next/link"
import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import "react-multi-carousel/lib/styles.css";
import Layout from "../../components/Layout"
import styles from '../../styles/components/girl.module.scss'


export default function Post({ data }) {
  console.log("data", data)
  useEffect( () => { 
        document.querySelector("body").classList.remove("light-mode") 
        document.querySelector("body").classList.remove("dark-mode") 

        if(data.type === "Good") {
          document.querySelector("body").classList.add("light-mode") 
        } else {
          document.querySelector("body").classList.add("dark-mode") 
        }
    });

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      }
    };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className={styles.imageContainer}>
            <Carousel 
              ssr={true}
              infinite={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              responsive={responsive}>
                <img src={data.main_image.url} alt={data.main_image.alt}/>
                { data.images.map((item, index) => 
                    <img src={item.image.url} alt={item.image.alt} key={index}/>
                  )}
            </Carousel>
            <Link href="/booking"><a className={`${styles.booknow} btn`}>Book Now</a></Link>
          </div>
          <div className={styles.detailsContainer}>
            <h1 className={styles.name}>{data.name[0].text}</h1>
            <div className="row">
              <div className={styles.statsConatiner}>
                <h2 className={styles.statsHeader}>Stats</h2>
                  <dl className={styles.stats}>
                    <dt>Age:</dt>
                    <dd>{data.age}</dd>
                    <dt>Height:</dt>
                    <dd>{data.height}</dd>
                    <dt>Hair:</dt>
                    <dd>{data.hair}</dd>
                    <dt>Curves:</dt>
                    <dd>{data.curves}</dd>
                    <dt>Dress:</dt>
                    <dd>{data.dress}</dd>
                  </dl>
              </div>
               <div className={styles.aboutConatiner}>
                  <h2 className={styles.aboutHeader}>About</h2>
                  <div className={styles.aboutContent}>
                  {data.about}
                </div>
               </div>
            </div>
            <div className="row">
              <div className={styles.priceContainer}>
                <table className={styles.priceTable}>
                  <thead>
                    <tr>
                      <th>Duration</th>
                      <th>Incall</th>
                      <th>Outcall</th>
                    </tr>
                  </thead>
                  <tbody>
                    { data.duration.map((item, index) => 
                      <tr key={index}>
                        <td>{item.time}</td>
                        <td>{item.incall}</td>
                        <td>{item.outcall}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className={styles.disclaimerContainer}>
                <h2 className={styles.disclaimerHeader}>Disclaimer</h2>
                <div className={styles.disclaimerContent}>
                  <p>Please read before booking your date.</p>
                  <p>Any money paid to the adult escorts listed on this website is for their time and companionship only. This is NOT an offer of prostitution. Whatever else that may occur if and when contact is made is the mutual choice between consenting adults.</p>
                  <p>We only offer services in the form of companionship with escorts for a given period of time.</p>
                </div>
              </div>
            </div>
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
