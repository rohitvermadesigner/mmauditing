import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4">
          <div>
            <Image
              src="/images/footer-logo.svg"
              width={400}
              height={0}
              alt=""
            />
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>

        <hr />
        
        <div className="grid grid-cols-3">
          <div>2</div>
          <div>2</div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
