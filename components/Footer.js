import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
        <div>
        [![Netlify Status](https://api.netlify.com/api/v1/badges/8eba1aa4-5386-4df0-9eae-7c6741be3072/deploy-status)](https://app.netlify.com/sites/lucid-lumiere-941437/deploys)
        </div>
      </footer>
    </>
  )
}
