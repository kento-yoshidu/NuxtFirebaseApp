import { useState, useRef } from 'react'
import Image from 'next/image'

import { useSwipeable } from "react-swipeable"

import Photo from "./Photo"

import styles from "pages/styles/photograph.module.css"

const Photograph = () => {
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
      <div
        className={styles.photoWrapper}
      >
        {[...Array(8)].map((_, i) => (
          <Photo
            key={`photo${i}`}
            showPhotoNumber={i + 1}
            openModal={openModal}
          />
        ))}
      </div>

      <dialog
        onClick={closeModal}
        ref={ref}
        className={styles.dialog}
      >
        <div
          className={styles.swipeHandler}
          {...handlers}
        >
          <div
            onClick={stopPropagation}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={`/photo/image0${showPhotoNumber}.jpg`}
                alt="test"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <button
              className={styles.prevButton}
              onClick={prevImage}
            >
              &lt;
            </button>

            <button
              className={styles.nextButton}
              onClick={nextImage}
            >
              &gt;
            </button>

            <button
              onClick={closeModal}
              className={styles.closeButton}
            >
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Photograph

