import * as React from "react"
import { graphql } from 'gatsby'
import { ParallaxProvider } from "react-scroll-parallax"


import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeroSlider from '../components/HeroSlider'
import AccentHeader from '../components/AccentHeader/AccentHeader'

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Seo title="Home" />
      <ParallaxProvider>
        <HeroSlider sliderData={data.prismicHomepage.data["hero_slider"]} />
      </ParallaxProvider>
      <div className="page">
        <section className="page-section content-wrapper">

          <AccentHeader>
            Hello people!
          </AccentHeader>
          <p>Nothing here yet</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos facere, enim dicta optio porro fugiat. Nihil voluptatibus optio ullam eaque dolorem enim, laborum maiores rem nemo! Perferendis, quae fuga!</p>
          <p>Consequuntur perspiciatis iure ratione quo non voluptatum cupiditate possimus voluptas beatae incidunt! Omnis reprehenderit ad sequi et recusandae vero modi iusto voluptatum voluptatem consequatur cumque ex eligendi, esse libero alias.</p>

          <h2>Hellow with another header</h2>
          <p>Iure nam excepturi nihil dignissimos. Nostrum illum, dignissimos voluptas iusto tempore harum placeat, obcaecati aperiam facilis repellendus delectus veniam tenetur amet, quidem ducimus. Cupiditate sequi voluptates pariatur similique, magni est.</p>
          <p>Adipisci quos reprehenderit, voluptate debitis suscipit officiis ad unde corrupti rem fuga. Similique porro repellendus aliquam dolore, eveniet ipsum, ad optio aperiam tempora mollitia labore excepturi, maxime maiores nobis vel.</p>
          <p>Maiores sint excepturi molestiae, dolorem eveniet obcaecati minima vitae iusto odio, repellat corrupti commodi. Quo vero maxime culpa explicabo reiciendis praesentium! Quibusdam, eum? Quam beatae dolor earum aspernatur reprehenderit corporis.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nulla quibusdam iure. Eaque ullam, officiis voluptates laboriosam at blanditiis, ab exercitationem quam unde aut voluptatum itaque sed velit doloribus quas minus! Minima nesciunt reiciendis minus delectus ducimus vitae accusantium sapiente id expedita, quibusdam totam, ipsum fugit. Culpa eum molestias veritatis, esse praesentium reprehenderit laborum, delectus similique quo quae perferendis corporis.</p>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query indexQuery {
    prismicHomepage {
      data {
        page_title {
          text
        }
        hero_slider {
          slide {
            gatsbyImageData
          }
        }
      }
    }
  }
`