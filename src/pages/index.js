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

import databricksDataEngineer from "../../content/images/certs/databricksDataEngineer.jpeg";
import azureDataFundamentals from "../../content/images/certs/azureDataFundamentals.png";
import gcpDataInsights from "../../content/images/certs/gcpDataInsights.png";
import dagsterEssentials from "../../content/images/certs/dagsterEssentials.png";
import kafkaFundamentals from "../../content/images/certs/kafkaFundamentals.png";
import cdmpAssociate from "../../content/images/certs/cdmpAssociate.png";

const certifications = [
    // ADD CERTIFICATIONS HERE WHEN ACQUIRED, ALSO ADD IMAGE ABOVE
    { title: 'Databricks Data Engineer', image: databricksDataEngineer, date: 'June 2024', link: 'https://credentials.databricks.com/1ea4a7d0-03b0-4eab-b042-e1154249f90a#acc.XzZIG4yb'}, 
    { title: 'Azure Data Fundamentals', image: azureDataFundamentals, date: 'November 2023', link: 'https://learn.microsoft.com/en-us/users/leonardobocci-5506/credentials/2f8cbf5cba1fda61'},
    { title: 'Kafka Fundamentals', image: kafkaFundamentals, date: 'Jun 2025', link: 'https://certificates.confluent.io/42c17a93-b554-4501-978f-f7ebf9d7551f#acc.CTXStd7Z'},
    { title: 'GCP Data to Insights', image: gcpDataInsights, date: 'March 2022', link: 'https://www.coursera.org/account/accomplishments/specialization/4H8CRJS6RE86'},
    { title: 'Dagster Essentials', image: dagsterEssentials, date: 'November 2023', link: 'https://courses.dagster.io/certificates/5gick1z9ja'},
    { title: 'Data Management Professional', image: cdmpAssociate, date: 'July 2024', link: 'https://eu.credential.net/58ecce6e-d538-455a-829e-b11cf92f1603#acc.bzX7xNLD'},
  ];

export default function IndexPage() {
  return (
    <>
      <head><meta name="google-site-verification" content="6U00pi-RaSITUQC4FSUuFTbe4M-VZ3E-StQZpKAVz2E" /></head>
      <Seo title="Leo Bocci" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ProjectsSection sectionId="projects" heading="Featured Projects" />
        <AboutSection sectionId="about" heading="About Me" />
        <h2 id="certificates" style={{ textAlign: 'center', marginTop: '2em' }}>Certifications</h2>
        <CertificationsCarousel certifications={certifications} />
        <InterestsSection sectionId="interests" heading="Interests" />
      </Page>
    </>
  );
}
