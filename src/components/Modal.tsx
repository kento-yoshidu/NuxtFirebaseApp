import React, { forwardRef, RefObject } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as Styles from "../styles/modal.module.scss"

type Props = {
  setModalImage: Function
  node: GatsbyTypes.IndexPageQuery["allImageSharp"]["edges"]
}

const Modal = ({ setModalImage, node }: Props, ref: RefObject<HTMLDialogElement>) => {
  const prev = () => {
    setModalImage(node)
  }

  const close = () => {
    ref.current?.close()
  }

  return (
    <>
      {node && (
        <dialog
          className={Styles.modal}
          ref={ref}
        >
          <GatsbyImage
            className={Styles.image}
            image={node.node.gatsbyImageData}
            alt="hoge"
          />

          {node.previous && (
            <button
              onClick={() => prev()}
              className={Styles.prev}
            >
              Prev
            </button>
          )}

          {node.next && (
            <button>Next</button>
          )}

          <button
            className={Styles.button}
            onClick={() => close()}
          >
            CLOSE
          </button>
        </dialog>
      )}
    </>
  )
}

export default forwardRef(Modal)
