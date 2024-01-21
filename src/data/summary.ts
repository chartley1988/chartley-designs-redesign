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
  };
}

// Enter all the info for your site here, used throughout.
const summary: summaryType = {
  siteName: "Chartley Designs",
  url: "https://www.carsonhartley.com/",
  logoURL: "../assets/images/pen.svg",
  description:
    "A web developer from Alberta, Canada. Devoted to making awesome things.",
  contact: { phone: "123-321-4321", email: "example@gmail.com" },
  social: {
    twitter: { url: "https://www.twitter.com/" },
    facebook: { url: "https://www.facebook.com/" },
    youtube: { url: "https://www.youtube.com/watch?v=Gibberish" },
  },
};

export default summary;
