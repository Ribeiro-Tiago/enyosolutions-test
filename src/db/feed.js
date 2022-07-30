const { DataTypes } = require("sequelize");

const sequelize = require("./");

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    feed: DataTypes.JSON,
    importDate: DataTypes.DATE,
  },
  {
    tableName: "feed",
  }
);

const saveImport = async (feed) => Article.create(feed);

module.exports = { saveImport };
