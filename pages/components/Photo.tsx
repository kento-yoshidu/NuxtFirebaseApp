import Image from "next/image"

import * as Styles from "../styles/photo.module.scss"

type Props = {
  showPhotoNumber: number
  openModal: Function
}

const Photo = ({ showPhotoNumber ,openModal }: Props) => (
  <div
    style={{
      "position": "relative",
      "width": "30%"
    }}
  >
    <p className={Styles.test}>hogehoge</p>
    <Image
      onClick={() => openModal(showPhotoNumber)}
      src={`/photo/image0${showPhotoNumber}.jpg`}
      alt="test"
      layout="fill"
      objectFit="contain"
    />
  </div>
)

export default Photo
