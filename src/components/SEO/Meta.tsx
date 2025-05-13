import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../../assets/favicon-32x32.png'; // Adjust the path to your logo image
interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  lang?: string;
  twitterSite?: string; // Twitter handle (e.g. @myapp)
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  author,
  lang = 'en',
  twitterSite = '@myapp'
}) => {
  const defaultTitle = title || import.meta.env.VITE_META_TITLE;
  const defaultDescription = description || import.meta.env.VITE_META_DESCRIPTION;
  const defaultKeywords = keywords || import.meta.env.VITE_META_KEYWORDS;
  const defaultImage = image || import.meta.env.VITE_META_IMAGE;
  const defaultUrl = url || import.meta.env.VITE_META_URL;
  const defaultAuthor = author || 'Pistonol';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="author" content={defaultAuthor} />
      <meta name="robots" content="index, follow" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> {/* for Google images and video */}

      {/* Favicon and Apple Touch Icon */}
      <link rel="icon" href= {logo}/>
      <link rel="apple-touch-icon" href={logo} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={defaultUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="My App" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterSite} />

      {/* Google / Schema.org Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "${defaultUrl}",
            "name": "${defaultTitle}",
            "description": "${defaultDescription}",
            "image": "${defaultImage}",
            "publisher": {
              "@type": "Organization",
              "name": "${defaultAuthor}",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            }
          }
        `}
      </script>

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta name="format-detection" content="telephone=no" /> {/* Disable link detection (email, phone numbers) */}

      {/* Canonical Link */}
      <link rel="canonical" href={defaultUrl} />

      {/* Open Graph for Video */}
      {/* <meta property="og:video" content="URL to video file or iframe" /> */}

      {/* Additional Meta Tags */}
      <meta name="google-site-verification" content="your-google-site-verification-code" /> {/* Google Search Console */}
      <meta name="msvalidate.01" content="your-bing-site-verification-code" /> {/* Bing Webmaster Tools */}

      {/* Social Media (additional tags for Instagram, Pinterest, etc.) */}
      {/* <meta name="pinterest" content="your-pinterest-verification-code" /> */}

        
    </Helmet>
  );
};

export default Meta;
