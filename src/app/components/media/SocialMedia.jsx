'use client'
import React from 'react'
import styles from './Media.module.css';
import portfolioData from "@/data/portfolioData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaIcons } from "./iconMapping";

const socialMediaLinks = portfolioData?.socialMedia || []

const SocialMedia = () => {
  return (
    <div className={styles['social-media-div']}>
      {socialMediaLinks.length > 0 ? (
        socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['icon-button']}
            style={{ backgroundColor: social.backgroundColor }}
          >
            <FontAwesomeIcon icon={socialMediaIcons[social.fontAwesomeIcon]} />
          </a>
        ))
      ) : (
        <p>No social media links available</p> // Fallback text
      )}
    </div>
  )
}

export default SocialMedia
