import Image from "next/image"

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
