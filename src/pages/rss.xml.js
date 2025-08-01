import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'TapfarTech Blog | IT Systems & Web Development',
    description: 'Explore systems administration best practices, web development insights, and technology solutions from Jacob Tapfar, U.S. Marine Corps Reservist and TapfarTech founder.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/posts/*.md')
    ),
    customData: `<language>en</language>`,
  });
}
