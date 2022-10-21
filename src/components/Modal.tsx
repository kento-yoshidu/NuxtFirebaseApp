import React, { forwardRef } from "react"

import * as Styles from "../styles/modal.module.scss"

type Props = {
  count: number
  modalNumber: number
  setModalNumber: Function
}

const Modal = ({count, modalNumber, setModalNumber }: Props, ref: any) => {
  const prev = () => {
    modalNumber === 1
      ? setModalNumber(count)
      : setModalNumber(modalNumber - 1)
  }

  const next = () => {
    modalNumber === count
      ? setModalNumber(1)
      : setModalNumber(modalNumber + 1)
  }

  const close = () => {
    ref.current?.close()
  }

  return (
    <dialog className={Styles.modal} ref={ref}>
      <h1>Modal</h1>

      <p>id: {modalNumber}</p>

      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <button onClick={() => close()}>閉じる</button>
    </dialog>
  )
}

export default forwardRef(Modal)
