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
      url: "https://www.twitter.com/",
      icon: "twitter-x",
      label: "Twitter",
    },
    facebook: {
      url: "https://www.facebook.com/",
      icon: "facebook",
      label: "Facebook",
    },
    youtube: {
      url: "https://www.youtube.com/watch?v=Gibberish",
      icon: "youtube",
      label: "Youtube",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/unique-url",
      icon: "linkedin",
      label: "LinkedIn",
    },
  },
};

export default summary;
