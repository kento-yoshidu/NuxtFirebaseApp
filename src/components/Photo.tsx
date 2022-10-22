import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

type Props = {
  showModal: Function
  setModalImage: Function
  node: any
}

const Photo = ({ showModal, setModalImage, node }: Props, ref: any) => {
  const handleClick = () => {
    showModal()
    setModalImage(node)
  }

  return (
    <div>
      <GatsbyImage
        image={node.node.gatsbyImageData}
        alt="hoge"
      />
      <button onClick={() => handleClick()}>クリックミー</button>
    </div>
  )
}

export default Photo
