const { Schema, model } = require('mongoose');

const DevSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // timestamps creates column's createdAt and updatedAt
  }
);

module.exports = model('Dev', DevSchema);
