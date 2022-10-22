import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import * as Styles from "../styles/Photo.module.scss"

type Props = {
  showModal: Function
  setModalImage: Function
  node: GatsbyTypes.IndexPageQuery["allImageSharp"]["edges"]
}

const Photo = ({ showModal, setModalImage, node }: Props ) => {
  const handleClick = () => {
    showModal()
    setModalImage(node)
  }

  return (
    <div
      className={Styles.imgWrapper}
      onClick={handleClick}
    >
      <GatsbyImage
        image={node.node.gatsbyImageData}
        alt="hoge"
      />
    </div>
  )
}

export default Photo
