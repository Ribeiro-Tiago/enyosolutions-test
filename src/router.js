const { Router } = require("express");

const articles = require("./articles")

const router = Router();

// articles
router.get("/api/health-check", (_, res) => res.json("ok"));
router.get("/api/articles", articles.getArticles);
router.post("/api/articles/import", articles.importArticles);

module.exports = router
