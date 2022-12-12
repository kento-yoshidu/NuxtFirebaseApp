import React, { useState, useRef } from "react"
import Image from 'next/image'

import Photo from "./components/Photo"

import { useSwipeable } from "react-swipeable"

import Styles from "./styles/style.module.scss"

import type { NextPage } from 'next'


const Home: NextPage = () => {
  const handlers = useSwipeable({
    onSwiped: (event) => {
      console.log(event);
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
      <h1>工事中。。。</h1>

      <div 
        className={Styles.photoWrapper}
      >
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
