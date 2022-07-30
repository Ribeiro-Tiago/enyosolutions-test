const { DataTypes } = require("sequelize");

const sequelize = require("./")

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    externalId: {
      type: DataTypes.STRING,
      unique: true,
    },
    importDate: DataTypes.DATE,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    publicationDate: DataTypes.DATE,
    link: DataTypes.STRING,
    mainPicture: DataTypes.STRING,
  },
  {
    tableName: "articles",
  }
);


const saveArticles = async (articles) => Article.bulkCreate(articles, { updateOnDuplicate: ["externalId"] })

const fetchArticles = async () => Article.findAll({})

module.exports = { saveArticles, fetchArticles }