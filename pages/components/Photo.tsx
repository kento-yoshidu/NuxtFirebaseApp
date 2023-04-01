import Image from "next/image"

import * as Styles from "../styles/photo.module.css"

type Props = {
  showPhotoNumber: number
  openModal: Function
}

const Photo = ({ showPhotoNumber = 1 ,openModal }: Props) => (
  <div className={Styles.wrapper}>
    <Image
      onClick={() => openModal(showPhotoNumber)}
      src={`/photo/image0${showPhotoNumber}.jpg`}
      alt=""
      fill
      style={{
        objectFit: "cover"
      }}
    />
  </div>
)

export default Photo
