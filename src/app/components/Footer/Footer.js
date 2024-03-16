import React from "react";
import styles from "./footer.module.css";
import { footer } from "@/app/Content/content";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <h6 className={styles.heading}>{footer.address.heading}</h6>
        {footer.address.texts.map((data, index) => (
          <p className={`${styles.text}`} key={index}>
            {data}
          </p>
        ))}
      </div>
      <div className={styles.linksList}>
        <h6 className={styles.heading}>{footer.links.heading}</h6>
        {footer.links.linkObject.map((data, index) => (
          <a
            className={`${styles.text} ${styles.hover}`}
            href={data.href}
            key={index}
          >
            {data.text}
          </a>
        ))}
      </div>
      <div className={styles.social}>
        <h6 className={styles.heading}>{footer.social.heading}</h6>
        {footer.social.links.map((data, index) => (
          <a
            href={data.href}
            className={`${styles.text} ${styles.hover}`}
            key={index}
          >
            {data.text}
          </a>
        ))}
      </div>
      <div className={styles.bottom}>
        <a href="/">
          <Image
            unoptimized
            src={footer.img}
            width={100}
            height={0}
            alt="blogImage"
            className={styles.footerLogo}
          />
        </a>
        <a href="https://procube.cx/" target="_blank">
          <p>{footer.copyRight}</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
