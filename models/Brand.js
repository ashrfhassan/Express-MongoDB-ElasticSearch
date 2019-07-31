const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const Schema = mongoose.Schema;

// schema with validators
const Brand = new Schema(
    {
        name: {type: String, default: ""},
        description: {type: String, default: ""},
        date: {type: Date, default: Date.now},
    }
    ,
    {
        versionKey: false
    }
);

Brand.plugin(mongoosastic, {
    hosts: [
      'localhost:9200', // elastic search db host
    ]
  });

const brandModel = mongoose.model('brand', Brand);
module.exports = brandModel;