// Types, edit this if you like
interface summaryType {
  siteName: string;
  url: string;
  logoURL: string;
  description: string;
  contact?: {
    phone?: string;
    email?: string;
  };
  social?: {
    twitter?: {
      url: string;
    };
    facebook?: {
      url: string;
    };
    youtube?: {
      url: string;
    };
    instagram?: {
      url: string;
    };
    linkedin?: {
      url: string;
    };
  };
}

// Enter all the info for your site here, used throughout.
const summary: summaryType = {
  siteName: "Chartley Designs",
  url: "https://www.carsonhartley.com/",
  logoURL: "../assets/images/pen.svg",
  description:
    "A web developer from Alberta, Canada. Devoted to making awesome things.",
  contact: { email: "info@carsonhartley.com" },
  social: {
    twitter: { url: "https://twitter.com/chartley1988" },
    linkedin: { url: "https://www.linkedin.com/in/carson-hartley-00930b269" },
  },
};

export default summary;
