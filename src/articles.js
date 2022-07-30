const Parser = require("rss-parser");

const { saveArticles, fetchArticles } = require("./db/articles");
const { saveImport } = require("./db/feed");

const importArticles = async (req, res) => {
  const url = req.query?.siteRssUrl;

  if (!url) {
    return res.status(422).json({ reason: "url missing" });
  }

  const parser = new Parser({
    customFields: { item: ["media:content", "description"] },
  });

  const feed = await parser.parseURL(url);
  
  const articles = feed
    .items
    .map(({ guid, title, description, pubDate, link, "media:content": img }) => {
      return {
        externalId: guid,
        importDate: new Date(),
        title,
        description,
        publicationDate: pubDate,
        link,
        mainPicture: img.$.url
      }
    })

  try {
    saveArticles(articles)
    saveImport({feed, importDate: new Date()})
  } catch(err){
    res.status(500).json({reason: "Something went wrong on our end"})
  }

  return res.status(201);
};

const getArticles = async (_, res) => res.status(200).json(await fetchArticles());

module.exports = { importArticles, getArticles };
