---
title: "Maintenance Guide for my site"
description: "Add sections, articles and images"
date: "2023-09-20"
banner:
  src: "../../images//maintenance/maintenance.jpg"
  alt: "maintenance"
  caption: 'Source: <u><a href="https://freepik.com">Freepik</a></u>'
categories:
  - "Web-dev"
  - "Gatsby"
  - "React"
keywords:
  - "Web-dev"
  - "Gatsby"
  - "React"
---

## How to maintain this portfolio site

The site was build as a fork of a gatsby starter theme. Sections were edited or added over time. I use this guide to remind myself how to do certain actions on this site when I need to update it.

### Adding a certification

1. Upload an image (jpeg, png, jpg) named in camelCase containing the certificate badge to the content/images/certs path.
2. Use the image name as the certificate name and add it to the toor page: index.js (import the image, add it to the certifications variable, including attributes like date and link)

### Edit the styling of the certification carousel

1. The CertificationsCarousel.js file defines the carousel's looks. Basic attributes like speed and items to display are in the settings variable.
2. Attributes like padding and maxWidth are defined inline through the style attribute inside the HTML tags
3. If adding attributes, remember to also add them to the existing certifications in index.js

### Adding/Editing a project article

Editing:
1. The text is contained in an index.md markdown file in the content/articles/articlename directory.
2. The article images referenced in the markdown file are inside the folder for each article: content/images/articlename
3. If changing the article banner image, remember to also change it if it was in the featured projects section: content/sections/projects/projects.json

### Editing a site image

Replace an existing image in content/images with another one with the same name and file extension.