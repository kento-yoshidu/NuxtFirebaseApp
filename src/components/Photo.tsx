import React from "react"


type Props = {
  id: number,
  title: string
  setShowNumber: Function
}

const Photo = ({ id, title, setShowNumber }: Props) => {
  const handleClick = () => {
    setShowNumber(id)
  }

  return (
    <div>
      <h1>{id}</h1>
      <p>{title}</p>

      <button onClick={handleClick}>クリックミー</button>
    </div>
  )
}

export default Photo
