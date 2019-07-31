const Brand = require('../models/Brand');

module.exports = {
    getBrands: async function (req, res) {
        Brand.search({"match_all": {} }, async function (err, results) {
            return res.send({
                ElasticData: results,
                MongoData: await Brand.find({})
            });
        });
    },
    addBrand: async function (req, res) {
        let brand = new Brand({
            name: req.params.name,
            description: req.params.description,
        });
        return await brand.save().then(function (newbrand) {
            return res.send({
                data: {
                    status: 0
                }
            });
        }).catch(function (err) {
            console.error(err);
        });
    },
};

