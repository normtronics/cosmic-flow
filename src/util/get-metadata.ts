import { Metadata } from "next";

export const getMetadata = (
  title: string,
  image: string,
  description: string,
  path: string
): Metadata => {
  return {
    title,
    description,
    applicationName: "In The Cosmic Flow",
    authors: [
      {
        name: "Femmifesting",
        url: `https://cosmic-flow.femmifesting.com/${path}`,
      },
    ],
    keywords:
      "Femmifesting, In the cosmic flow, djs, music, vinyl, women, ruby mountain",
    openGraph: {
      type: "website",
      title,
      description,
      emails: ["rubymountainmusic@gmail.com", "info@therosecrib.com"],
      siteName: title,
      url: `https://cosmic-flow.femmifesting.com/${path}`,
      images: [
        {
          url: `https://cosmic-flow.femmifesting.com/${image}`,
          secureUrl: `https://cosmic-flow.femmifesting.com/${image}`,
          type: "jpg",
        },
      ],
      countryName: "USA",
    },
    twitter: {
      card: "summary",
      site: `https://cosmic-flow.femmifesting.com/${path}`,
      creator: "Femmifesting",
      description,
      title,
      images: [
        {
          url: `https://cosmic-flow.femmifesting.com/${image}`,
          secureUrl: `https://cosmic-flow.femmifesting.com/${image}`,
          type: "jpg",
        },
      ],
    },
    creator: "Ruby Mountain",
  };
};
