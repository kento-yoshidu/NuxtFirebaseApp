import React, { useState, useRef } from "react"
import Image from 'next/image'

import Photo from "./components/Photo"

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [showPhotoNumber, setShowPhotoNumber] = useState<number | null>(null)
  const ref = useRef<HTMLDialogElement | null>(null)

  const openModal = (photoNumber: number) => {
    setShowPhotoNumber(photoNumber)
    ref?.current?.showModal()
  }

  const closeModal = () => {
    ref?.current?.close()
  }

  const prevImage = () => {
    showPhotoNumber === 1
      ? setShowPhotoNumber(8)
      : setShowPhotoNumber(showPhotoNumber! - 1) 
  }

  const nextImage = () => {
    showPhotoNumber === 8
      ? setShowPhotoNumber(1)
      : setShowPhotoNumber(showPhotoNumber! + 1) 
  }

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <>
      <h1>工事中。。。</h1>

      <div style={{
        "display": "flex",
        "justifyContent": "space-around",
        "width": "80vw",
        "height": "500px",
        "margin": "100px auto",
        "border": "1px solid red"
      }}>

        <Photo
          showPhotoNumber={1}
          openModal={openModal}
        />

        <Photo
          showPhotoNumber={2}
          openModal={openModal}
        />

      </div>

      <dialog
        onClick={closeModal}
        ref={ref}
      >
        <div onClick={stopPropagation}>
          ダイアログ

          <Image
            src={`/photo/image0${showPhotoNumber}.jpg`}
            alt="test"
            height={200}
            width={300}
          />

          <button onClick={prevImage}>
            Prev
          </button>

          <button onClick={nextImage}>
            Next
          </button>

          <button onClick={closeModal}>
            Close
          </button>
        </div>
      </dialog>
    </>
  )
}

export default Home
