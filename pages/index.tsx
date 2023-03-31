import React, { useState, useRef } from "react"
import type { NextPage } from 'next'

import Nav from "pages/components/nav"
import Header from "pages/components/header"
import Photograph from "./components/photograph"

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

      <Photograph />
    </>
  )
}

export default Home
