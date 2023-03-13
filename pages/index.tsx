import React, { useState, useRef } from "react"
import Image from 'next/image'
import type { NextPage } from 'next'

import Nav from "pages/components/__nav"
import Header from "pages/components/header"
import Photo from "pages/components/Photo"

import { useSwipeable } from "react-swipeable"

import Styles from "./styles/style.module.css"

const Home: NextPage = () => {
  const handlers = useSwipeable({
    onSwiped: (event) => {
      if (event.dir == "Left") {
        nextImage()
      }
      if (event.dir == "Right") {
        prevImage()
      }
    },
    trackMouse: true
  })

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
      <Nav />

      <Header />

      <div
        className={Styles.photoWrapper}
      >
        {[...Array(8)].map((_, i) => {
          return (
            <Photo
              key={`photo${i}`}
              showPhotoNumber={i + 1}
              openModal={openModal}
            />
          )
        })}
      </div>

      <dialog
        onClick={closeModal}
        ref={ref}
        className={Styles.dialog}
      >
        <div
          className={Styles.swipeHandler}
          {...handlers}
        >
          <div
            onClick={stopPropagation}
          >
            <div className={Styles.imageWrapper}>
              <Image
                src={`/photo/image0${showPhotoNumber}.jpg`}
                alt="test"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <button
              className={Styles.prevButton}
              onClick={prevImage}
            >
              &lt;
            </button>

            <button
              className={Styles.nextButton}
              onClick={nextImage}
            >
              &gt; 
            </button>

            <button
              onClick={closeModal}
              className={Styles.closeButton}
            >
              ×
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Home
