import logo from "../assets/images/pen.svg"

interface summaryType {
	siteName: string;
	url: URL;
	logoURL: string;
	description: string;
	twitterURL?: string;
	facebookURL?: string;
	youtubeURL?: string;
}

const summary = {
	siteName: "Chartley Designs",
	url: "https://chartley-template.vercel.app/",
	logoURL: logo.src,
	description:
		"Custom websites, both beautiful and functional. Optimized for SEO and speed.",
};

export default summary;
