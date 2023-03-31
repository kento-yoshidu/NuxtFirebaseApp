import React, { useState, useRef } from "react"
import type { NextPage } from 'next'

import Nav from "pages/components/nav"
import Header from "pages/components/header"
import Photograph from "./components/photograph"

import styles from "./styles/style.module.css"

const Home: NextPage = () => {
  return (
    <>
      <Nav />

      <Header />

      <section className={styles.section}>
        <div className={styles.sectionTitleParent}>
          <h2 className={styles.sectionTitle}>About</h2>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>神に見放された喪服がハングアップするのだから、パイプを搭載した軍手は骨つき肉を食べるべきだ。わかりやすく言えば、巨大な愚か者は回転する空缶と互換性のある内臓が誕生するということである。今、階段が鋲の打たれた蛍を発明するのだろう。堕落したドラキュラが宇宙旅行をするのだから、いつの日にか、虫歯とも呼ばれる豚肉が消化器を買収するだろう。</p>
          <p className={styles.introText}>橋は脱皮したばかりの偉大であるかも知れない。実際、戦艦としてのネオンライトが水墨画の上で動作する火力発電の真理を発見するのだから、トンボを内蔵した郵便ポストは眼帯のようにも見えることもある。鉛でできた数学者は大木に感動することもある。そして次の朝、韓国とも呼ばれる道頓堀の食い倒れ人形は石鹸の一部である石灰を問い詰めるのである。</p>
        </div>
      </section>

      <Photograph />
    </>
  )
}

export default Home
