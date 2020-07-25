
const mongoose = require("mongoose")

const Schema = mongoose.schema

const articleSchema = new Schema (
  {
    title: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
)

module.exports = mongoose.model("Article", articleSchema)
