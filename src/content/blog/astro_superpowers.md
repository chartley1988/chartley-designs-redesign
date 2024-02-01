---
title: The various super powers of Astro
url: "published"
date: 2024-01-28
summary: "Astro will probably make your life easier, so long as your life involves building a website. Here's how"
thumbnail:
  {
    image: "../../assets/images/astro-icon-light-gradient.svg",
    alt: "Picture of Astro Icon",
  }
layout: "../../layouts/Layout_BlogPost.astro"
---

## What is Astro?

Astro is a web framework. And if you're a web developer, you are probably
thinking 'seriously, another one?'. And that's fair, there's a million
frameworks these days. But I think Astro is different, and I think what
separates it is how accessible it is, even to a beginner. Unlike React and many
other libraries, **it stays very close to the fundamentals**. That means HTML,
CSS, and Javascript, and not much more. Astro's secret sauce is that it allows
you to make reusable components, keep styles local, generate static pages, work
with markdown, and more. And it does this _without needing to learn an advanced
syntax_.

## What's Astro good for?

Astro is best at static content-heavy websites. It is capable of far more than
that, but content is what it excels at. It is perfect for personal pages,
portfolios, product pages, company service pages, businesses, restaurants, and
more. Being optimized for static websites, Astro is highly effective when it
comes to performance and SEO. Because every page of the website is its own
static HTML file with its own meta data, search engines can index the site
effectively, and the site will load as fast as possible.

Astro can be used to make dynamic websites as well. It uses what is referred to
as "Islands Architecture". This allows a developer to create a mostly static
page, but embed dynamic elements that are hydrated within the statically
rendered HTML page. This means you can ship a fast-loading SEO-optimized page,
but have a carousel dynamically rendered in React rendered independently on the
page. Astro is also capable of Server side rendering, so it is possible to
create user authenticated pages or an e-commerce solution.

## Content Collections

Content collections might be my favorite feature in Astro. To use them, you
make a folder called "content" in the main project directory. Within that
folder, you can make any number of folders named whatever you want. Each of
these folders is then a 'collection'. Within a page, you can then fetch all the
data or markdown from one of these collections, and pass it in as a prop for
your page. You can also generate a page for each item in a collection. This
functionality can be used to make blog posts, or generate components from an
array of collection entries. And of course, Astro loves Typescript, so using a
single config file, you can setup typescript for your collections, so while
authoring content, you'll have the full power of type hints.

Here's an example of a blog post. This `.astro` file will generate a unique
html document for each blog post in the blog content collection. Markdown files
can also have meta data, this can be used generate dynamic headings with the
title of the page, or the date published. Markdown files in Astro can also
specify a layout file, another way to just focus on the content of each piece
of content. Here's an example of an Astro file that generates a blog post for
every piece of Markdown, it's dead simple:

<!-- Code Section -->

```astro

---
import { getCollection } from "astro:content";

// 1. Generate a new path for every collection entry
export async function getStaticPaths() {
  const allPosts = await getCollection("blog");

  return allPosts.map((entry) => ({
    params: { post: entry.data.url },
    props: { entry },
  }));
}
const { entry } = Astro.props;
const { Content } = await entry.render();
---
<!-- Renders markdown content -->
<content />


```

<!-- End of Code Section -->

## Styling

When it comes to adding styles to your website, Astro is pretty unopinionated.
You can stick with traditional style sheets, CSS modules, pre-processors,
tailwind, or whatever you want. One useful thing Astro does though is give you
locally scoped styles by default. This means you can keep your main stylsheet
nice and lean, but each page or component can have their own styles that won't
interfere with anything else on the site.

## Components

Another feature central to not only Astro, but almost every framework is
**components**. Traditionally, HTML files used to have a lot markup repeated
between files. If you changed your header in one file, you'd have to manually
update the headers on your other pages. Modern frameworks have addressed this
with components, which give you the ability to share common code across many
files with reusable code.
Like React, Astro uses a templating language for authoring components.
Components make use of variables called 'props' that allow you tailor the
content, styles, or function of a component on a use by use basis.

## The Bottom Line

So, from a high level, what's the point of using Astro? It's easy to create
content for, it prioritizes performance by keeping bundles small, and provides
a first-class developer experience. I used Astro for this site because I needed
a solution that I could drop in and edit new content for my site rapidly, and
update it seamlessly.
