import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage,  } from "gatsby-plugin-image"

import * as Styles from "../styles/style.module.scss"
import * as ModalStyles from "../styles/modal.module.scss"

const Modal = () => {
  const [show, setShow] = useState(false)
  const [imgNumber, setImgNumber] = useState<number>(0)

  const toggleShow = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!show) {
      setShow(true)
      setImgNumber(parseInt(e.target.dataset.img))
    } else {
      setShow(false)
    }
  }

  const { allImageSharp } = useStaticQuery<GatsbyTypes.AllImageSharpQuery>(graphql`
    query AllImageSharp {
      allImageSharp (
        sort: {
          fields: fluid___originalName
        }
      ) {
        edges {
          node {
            id
            gatsbyImageData
          }
        }
      }
    }
  `)

  return (
    <>
      {show &&
        <div
          className={ModalStyles.overlay}
          onClick={toggleShow}
        >
          <div
            className={ModalStyles.content}
            onClick={(e) => e.stopPropagation()}
          >
            {imgNumber === 1 &&
              <StaticImage
                src={"../images/modal/image01.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 2 &&
              <StaticImage
                src={"../images/modal/image02.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 3 &&
              <StaticImage
                src={"../images/modal/image03.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 4 &&
              <StaticImage
                src={"../images/modal/image04.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 5 &&
              <StaticImage
                src={"../images/modal/image05.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 6 &&
              <StaticImage
                src={"../images/modal/image06.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 7 &&
              <StaticImage
                src={"../images/modal/image07.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 8 &&
              <StaticImage
                src={"../images/modal/image08.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }
            <button onClick={toggleShow}>CLOSE</button>
          </div>
        </div>
      }

      <section className={Styles.section} id="photograph">
        <div className={Styles.sectionTitleParent}>
          <h2 className={`${Styles.title} ${Styles.sectionTitle}`}>Photograph</h2>
        </div>

        <div className={Styles.photosWrapper}>
          {allImageSharp.edges.map((image, i) => (
            <div
              onClick={toggleShow}
              className={Styles.imgWrapper}
            >
              <GatsbyImage
                image={image.node.gatsbyImageData}
                alt="joge"
                data-img={i + 1}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Modal
