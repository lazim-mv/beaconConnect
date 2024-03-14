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
  const color = [
    "#585569ff",
    "#f5ece1ff",
    "#7eb2ccff",
    "#7d7a7dff",
    "#24302cff",
  ];

  const { windowSize, isSmallScreen } = useWindowSize();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const breakPoint = 768;

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
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
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        } else if (isMobile) {
          return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
          };
        }

        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.stickyContainer}>
        <div className={styles.topHeadingContainer}>
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
                  width="max-content"
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
