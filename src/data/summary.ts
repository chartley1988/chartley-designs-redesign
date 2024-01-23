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
    twitter?: socialType;
    facebook?: socialType;
    youtube?: socialType;
    instagram?: socialType;
    linkedin?: socialType;
  };
}

interface socialType {
  url: string;
  icon: string;
  label: string;
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
    twitter: {
      url: "https://www.twitter.com/chartley1988",
      icon: "twitter-x",
      label: "Twitter",
    },
    linkedin: {
      url: "www.linkedin.com/in/carson-hartley-00930b269",
      icon: "linkedin",
      label: "LinkedIn",
    },
  },
};

export default summary;
