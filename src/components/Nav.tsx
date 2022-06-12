import React from "react"

import * as Styles from "../styles/nav.module.scss"

const Nav = () => (
  <nav className={Styles.globalNav}>
    <div className={Styles.navWrapper}>
      <h1 className={`${Styles.title} ${Styles.navTitle}`}>Sample1</h1>
      <ul className={Styles.navList}>
        <li className={Styles.navItem}>
          <a href="#">HOME</a>
        </li>
        <li className={Styles.navItem}>
          <a href="#about">About</a>
        </li>
        <li className={Styles.navItem}>
          <a href="#article">Article</a>
        </li>
        <li className={Styles.navItem}>
          <a href="#photograph">Photograph</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Nav
