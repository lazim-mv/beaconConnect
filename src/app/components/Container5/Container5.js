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
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const breakPoint = 768; // Adjust the breakpoint as needed

    mm.add({
      isDesktop: `(min-width: ${breakPoint}px)`,
      isMobile: `(max-width: ${breakPoint - 1}px)`,
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions;

      if (isDesktop) {
        // ScrollTrigger configuration for desktop
        let sections = gsap.utils.toArray(".container5_card__zg2lJ");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1.8),
          ease: "none",
          scrollTrigger: {
            trigger: ".container5_cards__sRzh7",
            start: "bottom 80%",
            end: "bottom top",
            scrub: 1,
          },
        });

        return () => {
          // Cleanup for desktop
          ScrollTrigger.getAll().forEach(st => st.kill());
        };
      } else if (isMobile) {
        // ScrollTrigger configuration for mobile
        // Add your mobile-specific ScrollTrigger configuration here

        return () => {
          ScrollTrigger.getAll().forEach(st => st.kill());
        };
      }

      return () => {
        // Default cleanup if neither desktop nor mobile
      };
    });
  }, []);
  

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
