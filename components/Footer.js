import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
        <img src="https://api.netlify.com/api/v1/badges/8eba1aa4-5386-4df0-9eae-7c6741be3072/deploy-status" alt="netlify_statys"></img>
        </div>
      </footer>
    </>
  )
}
