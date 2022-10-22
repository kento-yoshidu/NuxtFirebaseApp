import React, { forwardRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as Styles from "../styles/modal.module.scss"

type Props = {
  count: number
  modalNumber: number
  setModalNumber: Function
  node: GatsbyTypes.IndexPageQuery["allImageSharp"]["edges"]
}

const Modal = ({ modalNumber, node }: Props, ref: any) => {
  const close = () => {
    ref.current?.close()
  }

  return (
    <>
      {node && (
        <dialog className={Styles.modal} ref={ref}>
          <h1>Modal</h1>

          <p>id: {modalNumber}</p>

          <GatsbyImage
            image={node.node.gatsbyImageData}
            alt="hoge"
          />

          <button onClick={() => close()}>CLOSE</button>
        </dialog>

      )}
    </>
  )
}

export default forwardRef(Modal)
