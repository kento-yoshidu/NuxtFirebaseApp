import Image from "next/image"

import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <header>
      <h1 className={styles.headerTitle}>Sample1</h1>

      <figure className={styles.wrapper}>
        <Image
          src="/top.jpg"
          alt=""
          fill
          style={{
            objectFit: "cover"
          }}
        />
      </figure>
    </header>
  )
}

export default Header

