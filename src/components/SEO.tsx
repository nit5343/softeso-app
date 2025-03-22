import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../config/company';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const defaultDescription = "Softeso is a leading software development company specializing in web development, mobile apps, and cloud solutions.";
const defaultKeywords = ["software development", "web development", "mobile apps", "cloud services", "UI/UX design", "DevOps", "digital transformation"];
const defaultImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80";

const SEO: React.FC<SEOProps> = ({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url = "https://softeso.com"
}) => {
  const fullTitle = title ? `${title} | ${COMPANY.shortName}` : COMPANY.shortName;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* OpenGraph metadata */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY.shortName} />

      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional metadata */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={COMPANY.legalName} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;