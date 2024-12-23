import styles from "../assets/QR.module.css";
import QRCodeImage from "../assets/image-qr-code.png";

function QR() {
  return (
    <main className={styles.backgroundContainer}>
      <section className={styles.innerContainer}>
        <figure className={styles.QRContainer}>
          <div className={styles.QRImageContainer}>
            <img src={QRCodeImage} alt="QR Code" />
          </div>
          <h1 className={styles.QRTitle}>
            Improve your front-end skills by building projects
          </h1>
          <p className={styles.QRText}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </figure>
      </section>
    </main>
  );
}

export default QR;
