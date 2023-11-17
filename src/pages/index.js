//index.js

import React from "react";
import {
  AboutSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import CertificationsCarousel from './/CertificationsCarousel.js';

//import carImage from "./car.png";
import azureFundamentals from "../../content/images/certs/azureFundamentals.png";
import gcpDataInsights from "../../content/images/certs/gcpDataInsights.png";
import gcpBigQuery from "../../content/images/certs/gcpBigQuery.png";
import pgPowerBi from "../../content/images/certs/pgPowerBi.png";
import lakehouseFundamentals from "../../content/images/certs/lakehouseFundamentals.png";

const certifications = [
    // Your certification data
     { title: 'Databricks Lakehouse', image: lakehouseFundamentals, date: 'September 2023'},
     { title: 'Azure Fundamentals', image: azureFundamentals, date: 'January 2023'},
     { title: 'GCP Data to Insights', image: gcpDataInsights, date: 'March 2022'},
     { title: 'GCP BigQuery', image: gcpBigQuery, date: 'December 2021'},
     { title: 'P&G PowerBi', image: pgPowerBi, date: 'December 2021'},
    // ...
  ];

export default function IndexPage() {
  return (
    <>
      <Seo title="Leo Bocci" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <h2 style={{ textAlign: 'center', marginTop: '2em' }}>Certifications</h2>
        {certifications && <CertificationsCarousel certifications={certifications} />}
        <InterestsSection sectionId="interests" heading="Interests" />
        <ProjectsSection sectionId="projects" heading="Featured Projects" />
      </Page>
    </>
  );
}
