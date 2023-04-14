import styles from "../styles/article.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

type Props = {
  title: string
  text: string
  url: string
  icon: IconDefinition
}

const Article = ({ title, text, url, icon }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      <FontAwesomeIcon icon={icon} className={styles.icon}/>

      <p className={styles.text}>{text}</p>

      <a href={url} className={styles.link}>more...</a>
    </div>
  )
}

export default Article
