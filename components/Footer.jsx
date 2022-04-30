import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE GoFooD , WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 Sold Leck Road #304.
            <br /> Kolkata, 70001
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. New Toun Rd #235.
            <br /> Delhi, 90002
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Mahakal St #104.
            <br /> Mumbai, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Sold Tech St #125.
            <br /> Chennai, 78002
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
