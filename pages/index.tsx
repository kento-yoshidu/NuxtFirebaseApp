import React, { useState, useRef } from "react"
import Image from 'next/image'

import Photo from "./components/Photo"

import Styles from "./styles/style.module.scss"

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
        "flexWrap": "wrap",
        "justifyContent": "center",
        "width": "80vw",
        "minHeight": "500px",
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

        <Photo
          showPhotoNumber={3}
          openModal={openModal}
        />

        <Photo
          showPhotoNumber={4}
          openModal={openModal}
        />

        <Photo
          showPhotoNumber={5}
          openModal={openModal}
        />

        <Photo
          showPhotoNumber={6}
          openModal={openModal}
        />

        <Photo
          showPhotoNumber={7}
          openModal={openModal}
        />

        <Photo
          showPhotoNumber={8}
          openModal={openModal}
        />
      </div>

      <dialog
        onClick={closeModal}
        ref={ref}
        className={Styles.dialog}
      >
        <div
          className={Styles.imageWrapper}
          onClick={stopPropagation}
        >
          <Image
            src={`/photo/image0${showPhotoNumber}.jpg`}
            alt="test"
            layout="fill"
            objectFit="contain"
          />

          <button
            className={Styles.prevButton}
            onClick={prevImage}
          >
            Prev
          </button>

          <button onClick={nextImage}>
            Next
          </button>

          <button
            onClick={closeModal}
            className={Styles.closeButton}
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  )
}

export default Home
