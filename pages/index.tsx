import { useState, useRef } from "react"
import Image from 'next/image'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [showPhoto, setShowPhoto] = useState<string | null>("image01.jpg")
  const ref = useRef<HTMLDialogElement | null>(null)

  const openModal = () => {
    ref?.current?.showModal()
  }

  const closeMOdal = () => {
    ref?.current?.close()
  }

  return (
    <>
      <h1>工事中。。。</h1>

      <Image
        onClick={openModal}
        src={`/photo/${showPhoto}`}
        alt="test"
        height={300}
        width={200}
      />

      <dialog ref={ref}>
        ダイアログ

          <Image
            src={`/photo/${showPhoto}`}
            alt="test"
            height={200}
            width={300}
          />
        <button onClick={closeMOdal}>
          Close
        </button>
      </dialog>
    </>
  )
}

export default Home
