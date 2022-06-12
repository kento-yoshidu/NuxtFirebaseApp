import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as Styles from "./styles/style.module.scss"
import * as ModalStyles from "./styles/modal.module.scss"

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
                src={"./images/image01.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 2 &&
              <StaticImage
                src={"./images/image02.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 3 &&
              <StaticImage
                src={"./images/image03.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 4 &&
              <StaticImage
                src={"./images/image04.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 5 &&
              <StaticImage
                src={"./images/image05.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 6 &&
              <StaticImage
                src={"./images/image06.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 7 &&
              <StaticImage
                src={"./images/image07.jpg"}
                alt="hoge"
                className={Styles.imgWrapper}
                layout="fullWidth"
              />
            }

            {imgNumber === 8 &&
              <StaticImage
                src={"./images/image08.jpg"}
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
          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image01.jpg"
              alt="hoge"
              data-img="1"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image02.jpg"
              alt="hoge"
              data-img="2"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image03.jpg"
              alt="hoge"
              data-img="3"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image04.jpg"
              alt="hoge"
              data-img="4"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image05.jpg"
              alt="hoge"
              data-img="5"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image06.jpg"
              alt="hoge"
              data-img="6"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image07.jpg"
              alt="hoge"
              data-img="7"
            />
          </div>

          <div
            onClick={toggleShow}
            className={Styles.imgWrapper}
          >
            <StaticImage
              src="./images/image08.jpg"
              alt="hoge"
              data-img="8"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Modal
