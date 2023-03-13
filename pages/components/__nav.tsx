import styles from "../styles/nav.module.css"

const Nav = () => (
  <nav className={styles.nav}>
    <h1 className={styles.navTitle}>Sample1</h1>

    <ul className={styles.navList}>
      <li><a href="#" className={styles.navLink}>HOME</a></li>
      <li><a href="#about" className={styles.navLink}>About</a></li>
      <li><a href="#article" className={styles.navLink}>Article</a></li>
      <li><a href="#photograph" className={styles.navLink}>Photograph</a></li>
    </ul>
  </nav>
)

export default Nav
