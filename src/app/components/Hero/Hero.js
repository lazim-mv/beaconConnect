"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "./hero.module.css";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import { heroData } from "../../Content/content";
import New from "../LogoSlider/New";

const Hero = () => {
  const brandLogos = heroData.brandLogos;

  return (
    <>
      <div className={styles.container1}>
        <SectionTitle
          sectionText="Unlocking Digital Potential: Where Vision Becomes Reality"
          color="#fff"
          wordIndex={[3, 4, 5, 6]}
        />
        <SectionDescription
          sectionText={heroData.description}
          width="39.41798941798942vw"
        />
        <a href="pages/Services">
          <BtnComponent
            buttonText={heroData.btnText}
            borderColor="rgba(255, 255, 255, 0.6)"
            bg="transparent"
            color="#fff"
            margin="0 auto"
          />
        </a>
      </div>
      {/* <LogoSlider
        imageSources={repeatedImageSources}
        initialAnimateValue="-160%"
        hoverDuration="1700"
        duration="800"
      /> */}
      {/* <New /> */}
    </>
  );
};

export default Hero;
