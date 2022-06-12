import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/footer.module.scss"

const Footer = () => (
  <footer className={Styles.footer}>
    <h2 className={`${Styles.title} ${Styles.footerTitle}`}>
      Portfolio Site
    </h2>
    <div className={Styles.footerWrapper}>
      <section className={Styles.footerSection}>
        <h3 className={`${Styles.title}`}>Sample Page</h3>
        <ul className={Styles.footerList}>
          <li className={Styles.listItem}>
            <Link to="/sample-page/sample2/">Sample2</Link>
          </li>
          <li className={Styles.listItem}>
            <Link to="/sample-page/sample3/">Sample3</Link>
          </li>
          <li className={Styles.listItem}>
            <Link to="/sample-page/sample4/">Sample4</Link>
          </li>
          <li className={Styles.listItem}>
            <Link to="/sample-page/sample5/">Sample5</Link>
          </li>
        </ul>
      </section>

      <section className={Styles.footerSection}>
        <h3 className={Styles.title}>Contents</h3>
        <ul className={Styles.footerList}>
          <li className={Styles.listItem}>
            <a href="https://cssanimation.toriwatari.work/" target="_blink">
              CSS Animation & Tips
            </a>
          </li>
          <li className={Styles.listItem}>
            <a href="https://blog.toriwatari.work/page/1/" target="_blink">
              鳥に生まれることができなかった人へ
            </a>
          </li>
        </ul>
      </section>
    </div>

    <p className={Styles.copyright}>
      Copyright © 2021 <a href="https://potsunen.info">toriwatari</a>
    </p>
  </footer>
)

export default Footer
