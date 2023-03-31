import React, { useState, useRef } from "react"
import type { NextPage } from 'next'

import Container from "./components/container"
import Nav from "pages/components/nav"
import Article from "./components/article"
import Header from "pages/components/header"
import Photograph from "./components/photograph"

import styles from "./styles/style.module.css"

import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"

const Home: NextPage = () => {
  return (
    <>
      <Container>
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

        <section className={styles.section}>
          <div className={styles.sectionTitleParent}>
            <h2 className={styles.sectionTitle}>Artcile</h2>
          </div>

          <div className={styles.articleWrapper}>
            <Article
              title="初めてのHTML & CSS"
              text="前提知識はほとんどなくてOKです。HTMLとCSSを使用してWebページを作成します。"
              url="https://blog.toriwatari.work/category/HelloWeb/page/1/"
              icon={faCode}
            />

            <Article
              title="Git中級者を目指す"
              text="Gitの入門書を読み終わった人向けの、さらなるステップへ進むためのGit講座です。"
              url="https://blog.toriwatari.work/category/GitAdvance/page/1/"
              icon={faGitAlt}
            />

            <Article
              title="日記"
              text="主にプログラミング以外のことを記事にしています。"
              url="https://blog.toriwatari.work/category/HelloWeb/page/1/"
              icon={faBook}
            />
          </div>

          <div className="btn-wrapper"><a href="https://blog.toriwatari.work/page/1/" className="btn" target="_blink">read more</a></div>
        </section>

        <Photograph />
      </Container>
    </>
  )
}

export default Home
