import React from "react"

type Props = {
  id: number,
  title: string
  setModalNumber: Function
  showModal: Function
}

const Photo = ({ id, title, setModalNumber, showModal }: Props, ref: any) => {
  const handleClick = () => {
    showModal()
    setModalNumber(id)
  }

  return (
    <div>
      <h1>{id}</h1>
      <p>{title}</p>

      <button onClick={() => handleClick()}>クリックミー</button>
    </div>
  )
}

export default Photo
