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

import azureFundamentals from "../../content/images/certs/azureFundamentals.png";
import azureDataFundamentals from "../../content/images/certs/azureDataFundamentals.png";
import gcpDataInsights from "../../content/images/certs/gcpDataInsights.png";
import gcpBigQuery from "../../content/images/certs/gcpBigQuery.png";
import pgPowerBi from "../../content/images/certs/pgPowerBi.png";
import lakehouseFundamentals from "../../content/images/certs/lakehouseFundamentals.png";

const certifications = [
    // ADD CERTIFICATIONS HERE WHEN ACQUIRED, ALSO ADD IMAGE ABOVE
     { title: 'Azure Data Fundamentals', image: azureDataFundamentals, date: 'November 2023', link: 'https://learn.microsoft.com/en-us/users/leonardobocci-5506/credentials/2f8cbf5cba1fda61'},
     { title: 'Databricks Lakehouse', image: lakehouseFundamentals, date: 'September 2023', link: '../../static/lakehouseFundamentals.pdf'},
     { title: 'Azure Fundamentals', image: azureFundamentals, date: 'January 2023', link: 'https://learn.microsoft.com/api/credentials/share/en-us/LeonardoBocci-5506/B83D7D90AD724399?sharingId=DAFD346806A277E6'},
     { title: 'GCP Data to Insights', image: gcpDataInsights, date: 'March 2022', link: 'https://www.coursera.org/account/accomplishments/specialization/4H8CRJS6RE86'},
     { title: 'GCP BigQuery', image: gcpBigQuery, date: 'December 2021', link: 'https://coursera.org/verify/DJJZK5VVECTZ'},
     { title: 'P&G PowerBi', image: pgPowerBi, date: 'December 2021', link: 'https://www.credly.com/badges/e6b80856-4ecd-4f0a-951f-835af4731d6d'},
  ];

export default function IndexPage() {
  return (
    <>
      <Seo title="Leo Bocci" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="projects" heading="Featured Project" />
        <AboutSection sectionId="about" heading="About Me" />
        <h2 id="certificates" style={{ textAlign: 'center', marginTop: '2em' }}>Certifications</h2>
        <CertificationsCarousel certifications={certifications} />
        <InterestsSection sectionId="interests" heading="Interests" />
      </Page>
    </>
  );
}
