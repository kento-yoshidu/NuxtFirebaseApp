import React, { useState, useRef } from "react"
import Image from 'next/image'

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

        <div
          style={{
            "position": "relative",
            "width": "30%"
          }}
        >
          <Image
            onClick={() => openModal(1)}
            src={`/photo/image01.jpg`}
            alt="test"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          style={{
            "position": "relative",
            "width": "30%"
          }}
        >
          <Image
            onClick={() => openModal(2)}
            src={`/photo/image02.jpg`}
            alt="test"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <dialog ref={ref}>
        ダイアログ

        <Image
          src={`/photo/image0${showPhotoNumber}.jpg`}
          alt="test"
          height={200}
          width={300}
        />

        {showPhotoNumber}

        <button onClick={prevImage}>
          Prev
        </button>

        <button onClick={nextImage}>
          Next
        </button>

        <button onClick={closeModal}>
          Close
        </button>
      </dialog>
    </>
  )
}

export default Home
