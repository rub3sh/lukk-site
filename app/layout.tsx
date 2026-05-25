import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import DevProtection from "@/components/dev-protection";

const BASE_URL = "https://www.lukkautomations.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "LUKK Automations — Industrial Robotics & Automation | Singapore",
    template: "%s | LUKK Automations",
  },

  description:
    "LUKK Automations designs and deploys 100% custom-engineered AMR, AGV, FMR, AI Vision, Robotic Arm and full-stack robotics platforms across Singapore, Malaysia, India & Indonesia. Trusted by manufacturers in semiconductor, pharma, logistics, food, cleanroom and e-commerce industries. Deployed in weeks, not months. Full 1-year warranty & technical support.",

  keywords: [
    "robotics automation Singapore",
    "AMR autonomous mobile robots Singapore",
    "AGV automated guided vehicles",
    "FMR forklift mobile robot",
    "warehouse automation Southeast Asia",
    "AI vision systems industrial",
    "autonomous robots Malaysia",
    "industrial automation India Indonesia",
    "cleanroom automation robots",
    "pharmaceutical automation robots",
    "semiconductor automation Singapore",
    "logistics automation SEA",
    "robotic arm integration Singapore",
    "6-way shuttle system",
    "digital packing station",
    "LUKK Automations",
    "Lukk Automation Solutions Pte Ltd",
    "industrial robots Southeast Asia",
    "custom robotics platform",
    "full-stack robotics hardware AI software",
    "factory automation Singapore",
    "manufacturing automation Malaysia",
    "robot deployment weeks",
    "Northpoint Biz Hub robotics Singapore",
    "warehouse robots e-commerce",
    "food industry automation robot",
    "energy sector automation",
    "education robotics system",
    "automobile manufacturing robot",
    "modular robotics platform",
    "AI-driven industrial robots",
    "autonomous forklift Singapore",
    "LUKK AMR AGV FMR",
  ],

  authors: [{ name: "LUKK Automations", url: BASE_URL }],
  creator: "ARQX-Atlas Systems",
  publisher: "Lukk Automation Solutions Pte. Ltd.",
  category: "Industrial Robotics & Automation",
  classification: "Business, Technology, Manufacturing",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_SG",
    url: BASE_URL,
    siteName: "LUKK Automations",
    title: "LUKK Automations — Industrial Robotics & Automation | Singapore",
    description:
      "100% custom-engineered AMR, AGV, FMR, AI Vision and full-stack robotics platforms deployed across Singapore, Malaysia, India & Indonesia. Deployed in weeks, not months. Full 1-year warranty.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LUKK Automations — Industrial Robotics & Automation, Singapore",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LUKK Automations — Industrial Robotics & Automation | Singapore",
    description:
      "100% custom-engineered AMR, AGV, FMR, AI Vision and full-stack robotics platforms across Singapore, Malaysia, India & Indonesia.",
    images: ["/og-image.png"],
    creator: "@lukkautomations",
    site: "@lukkautomations",
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-SG": BASE_URL,
    },
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },

  other: {
    "x-built-by": "ARQX-Atlas Systems",
    // Geographic meta tags
    "geo.region": "SG",
    "geo.placename": "Singapore",
    "geo.position": "1.4350;103.8360",
    "ICBM": "1.4350, 103.8360",
    // Business contact
    "contact": "hello@lukkautomations.com",
    "reply-to": "hello@lukkautomations.com",
    // Rating
    "rating": "general",
    // Revisit
    "revisit-after": "7 days",
    // Language
    "language": "English",
    // Copyright
    "copyright": "Lukk Automation Solutions Pte. Ltd.",
  },

  generator: "ARQX-Atlas Systems",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Lukk Automation Solutions Pte. Ltd.",
      alternateName: ["LUKK Automations", "LUKK"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 180,
        height: 28,
      },
      image: `${BASE_URL}/og-image.png`,
      description:
        "LUKK Automations designs and deploys 100% custom-engineered AMR, AGV, FMR, AI Vision and full-stack robotics platforms across Singapore, Malaysia, India & Indonesia.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Yishun Industrial Street 1, Northpoint Biz Hub, #04-29",
        addressLocality: "Singapore",
        postalCode: "768159",
        addressCountry: "SG",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+65-6298-5647",
          contactType: "customer service",
          areaServed: ["SG", "MY", "IN", "ID"],
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          telephone: "+65-8546-0045",
          contactType: "sales",
          contactOption: "HearingImpairedSupported",
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9994312112",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "English",
        },
      ],
      email: "hello@lukkautomations.com",
      sameAs: [
        "https://sg.linkedin.com/company/lukk-automation-solution",
        "https://www.instagram.com/lukk_automation_solution",
      ],
      areaServed: [
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "Malaysia" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Indonesia" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Robotics & Automation Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AMR — Autonomous Mobile Robots",
              description: "Self-navigating robots for warehouse and factory floor automation across Southeast Asia.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AGV — Automated Guided Vehicles",
              description: "Track-guided vehicles for precise, repeatable material handling in industrial environments.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "FMR — Forklift Mobile Robots",
              description: "Autonomous forklift robots for pallet handling, stacking, and warehouse logistics.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Vision Systems",
              description: "Industrial AI vision inspection and quality control systems with 95–99% accuracy.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Robotic Arm Integration",
              description: "Custom robotic arm solutions for assembly, pick-and-place, and precision manufacturing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Packing Station",
              description: "Automated digital packing solutions for e-commerce and logistics fulfilment centres.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "6-Way Shuttle System",
              description: "High-density 6-way shuttle storage and retrieval system for warehouse automation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Platform",
              description: "Full-stack robotics software platform for fleet management, AI analytics, and system integration.",
            },
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "LUKK Automations",
      image: `${BASE_URL}/og-image.png`,
      url: BASE_URL,
      telephone: "+6562985647",
      email: "hello@lukkautomations.com",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Yishun Industrial Street 1, Northpoint Biz Hub, #04-29",
        addressLocality: "Singapore",
        postalCode: "768159",
        addressCountry: "SG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 1.435,
        longitude: 103.836,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      currenciesAccepted: "SGD",
      paymentAccepted: "Bank Transfer, Invoice",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "LUKK Automations",
      description: "Industrial Robotics & Automation across Southeast Asia",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-SG",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "LUKK Automations — Industrial Robotics & Automation | Singapore",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "LUKK Automations designs and deploys custom AMR, AGV, FMR, AI Vision and full-stack robotics platforms across Singapore, Malaysia, India & Indonesia. 100% custom-engineered. Deployed in weeks.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
      inLanguage: "en-SG",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SG" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-zinc-950 text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DevProtection />
      </body>
    </html>
  );
}
