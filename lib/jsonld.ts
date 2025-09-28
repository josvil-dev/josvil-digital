export interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs: string[];
  address: {
    "@type": string;
    addressCountry: string;
  };
  knowsAbout: string[];
  offers: ServiceSchema[];
}

export interface ServiceSchema {
  "@type": string;
  name: string;
  description: string;
}

export interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  author: {
    "@type": string;
    name: string;
  };
  potentialAction: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export interface ProjectSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  author: {
    "@type": string;
    name: string;
  };
  programmingLanguage: string[];
  dateCreated: string;
  image?: string;
}

export const createPersonSchema = (): PersonSchema => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Joshua Vilanculo",
  "jobTitle": "Full Stack Developer",
  "description": "Experienced web developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with over 5 years of expertise.",
  "url": "https://josvil.digital",
  "image": "https://josvil.digital/josvil.jpg",
  "sameAs": [
    "https://github.com/joshuavilanculo",
    "https://linkedin.com/in/joshuavilanculo",
    "https://twitter.com/joshuavilanculo"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MZ"
  },
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js", 
    "Node.js",
    "UI/UX Design",
    "Web Development",
    "Mobile App Development",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Express.js",
    "React Native"
  ],
  "offers": [
    {
      "@type": "Service",
      "name": "Web Development",
      "description": "Custom web applications using React, Next.js, and modern technologies"
    },
    {
      "@type": "Service",
      "name": "UI/UX Design", 
      "description": "User-centered design for web and mobile applications"
    },
    {
      "@type": "Service",
      "name": "Mobile App Development",
      "description": "Cross-platform mobile applications using React Native"
    }
  ]
});

export const createWebsiteSchema = (): WebsiteSchema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Joshua Vilanculo - Full Stack Developer",
  "description": "Portfolio and services of Joshua Vilanculo, a full stack developer specializing in modern web technologies and digital experiences.",
  "url": "https://josvil.digital",
  "author": {
    "@type": "Person",
    "name": "Joshua Vilanculo"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://josvil.digital/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const createProjectSchema = (project: {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  dateCreated: string;
  image?: string;
}): ProjectSchema => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": project.name,
  "description": project.description,
  "url": project.url,
  "author": {
    "@type": "Person",
    "name": "Joshua Vilanculo"
  },
  "programmingLanguage": project.technologies,
  "dateCreated": project.dateCreated,
  ...(project.image && { "image": project.image })
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Josvil Digital",
  "description": "Professional web development and digital solutions by Joshua Vilanculo",
  "url": "https://josvil.digital",
  "founder": {
    "@type": "Person",
    "name": "Joshua Vilanculo"
  },
  "foundingDate": "2019",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+258-XXX-XXX-XXX",
    "contactType": "customer service",
    "email": "hello@josvil.digital"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MZ"
  }
});

export const createServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Web Development Services",
  "description": "Professional web development, UI/UX design, and mobile app development services",
  "provider": {
    "@type": "Person",
    "name": "Joshua Vilanculo"
  },
  "areaServed": "Global",
  "serviceType": ["Web Development", "UI/UX Design", "Mobile App Development"],
  "url": "https://josvil.digital"
});