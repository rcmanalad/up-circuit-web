import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import { ORG } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upcircuit.org/"),
  title: {
    default: "UP Circuit — Conduct, Rectify, Amplify",
    template: "%s | UP Circuit",
  },
  description:
    "UP Circuit (UP CKT), the premier Electrical and Electronics Engineering student organization of UP Diliman since 1994. Partner with us for top-tier EEE talent, national brand visibility via SquEEEze, ESG impact through The E-Waste Project, and early freshmen engagement at InteraCKT.",
  keywords: [
    "UP Circuit",
    "UP CKT",
    "EEEI",
    "UP Diliman",
    "EEE student organization",
    "SquEEEze",
    "E-Waste Project",
    "InteraCKT",
    "engineering sponsorship",
    "CSR",
    "ESG partnership",
  ],
  authors: [{ name: "UP Circuit" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "UP Circuit",
    title: "UP Circuit — Conduct, Rectify, Amplify",
    description:
      "Partner with the premier EEE student organization of UP Diliman: top engineering talent, national brand visibility, and measurable ESG impact.",
    url: "https://www.upcircuit.org/",
    images: [
      {
        url: "/logo.png",
        width: 960,
        height: 476,
        alt: "UP Circuit logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UP Circuit — Conduct, Rectify, Amplify",
    description: "The premier EEE student organization of UP Diliman. Partner with us for talent, visibility, and impact.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1174b5",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG.name,
  alternateName: ORG.shortName,
  slogan: ORG.slogan,
  foundingDate: "1994-02",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of the Philippines Diliman — Electrical and Electronics Engineering Institute",
  },
  email: ORG.email,
  url: ORG.website,
  sameAs: [
    "https://facebook.com/upcircuit",
    "https://facebook.com/upcircuit.squeeeze",
    "https://facebook.com/ewasteproject",
    "https://facebook.com/upcircuit.interackt",
    "https://www.instagram.com/up.circuit/",
    "https://twitter.com/upckt",
    "https://www.youtube.com/@circuithayt",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${grotesk.variable} overflow-x-hidden font-body`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
