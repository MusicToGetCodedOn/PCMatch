import { Link } from "react-router-dom"
import styles from "./HomeRoute.module.css"
import Button from "../components/Button"

export default function HomeRoute() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.infoCard}>
        <h1 className={styles.title}>Welcome to our Homepage</h1>
        <p className={styles.description}>This is just an example Text!</p>
       
          <Link to="/builder/">
          <Button>Start your Build</Button></Link>
          
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Search through Products!</h1>
        <p className={styles.description}>This is not the Final Text!</p>
        <Link to="/products/"> <Button>
          Show Products
        </Button>
        </Link>
       </div>
    </main>
  )
}
