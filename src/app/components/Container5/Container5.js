"use client";
import React, { useEffect } from "react";
import styles from "./container5.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { container5Data } from "@/app/Content/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container5 = () => {
  const cardData = container5Data.cardData;

  const { windowSize, isSmallScreen } = useWindowSize();
  useEffect(() => {
    if (!isSmallScreen) {
      gsap.registerPlugin(ScrollTrigger);

      console.log("ScrollTrigger Plugin Registered");

      let sections = gsap.utils.toArray(".container5_card__zg2lJ");
      console.log("Sections:", -100 * sections.length - 1);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1.8),
        // xPercent: -320,
        // duration:50,
        ease: "none",
        scrollTrigger: {
          trigger: ".container5_cards__sRzh7",
          start: "bottom 80%",
          end: "bottom top",
          scrub: 1,
          // snap: !isSmallScreen && 1 / (sections.length - 1),
          // end:"+=1500"
        },
      });

      console.log("ScrollTrigger Setup Complete");
    }
  }, [isSmallScreen]);
  console.log(isSmallScreen, "cBtn6");

  // useEffect(() => {
  //   if (!isSmallScreen) {
  //     gsap.registerPlugin(ScrollTrigger);
  
  //     let container = document.querySelector(".container5_cards__sRzh7");
  //     let sections = gsap.utils.toArray(".container5_card__zg2lJ");
  
  //     // Calculate the total width including space between cards
  //     let totalWidth = container.offsetWidth * sections.length - container.offsetWidth;

  
  //     gsap.to(container, {
  //       xPercent: -100 / (totalWidth / container.offsetWidth), // Calculate xPercent
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "bottom 80%",
  //         end: "bottom top",
  //         scrub: 1,
  //         onUpdate: (e) => {
  //           console.log("xPercent:", e.progress * 100);
  //         },
  //       },
  //     });
  //   }
  // }, [isSmallScreen]);
  

  return (
    <div className={styles.container}>
      <div className={styles.stickyContainer}>
        <SectionName sectionText={container5Data.sectionName} />
        <div className={styles.tittle}>
          <SectionTitle sectionText={container5Data.sectionTitle} />
          {!isSmallScreen && (
            <BtnComponent
              buttonText={container5Data.btnText}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          )}
        </div>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.container5Img}>
                <Image
                  unoptimized
                  src={data.img}
                  width={100}
                  height={0}
                  alt="ImageClients"
                />
              </div>
              <div className={styles.cardHeadingAndButton}>
                <h6>{data.cardHeading}</h6>
                <BtnComponent
                  buttonText={data.btnText}
                  borderColor="rgba(255, 255, 255, 0.6)"
                  bg="transparent"
                  color="#fff"
                  width={
                    isSmallScreen
                      ? "29.333333333333332vw"
                      : "8.862433862433862vw"
                  }
                  height="2.976190476190476vw"
                  arrow={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container5;
