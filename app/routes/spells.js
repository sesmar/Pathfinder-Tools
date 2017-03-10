// app/routes/spells.js

// load the spell model
var Spell = require('../models/spell');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    app.get('/api/spell', function(req, res) {

        // use mongoose to get all spells matching the search term in the database
        var findParams = {};

        parseRequestParams(req, findParams);

        queryDatabase(res, findParams);
    });

    app.get('/api/spell/:name', function(req, res) {

        // use mongoose to get all spells matching the search term in the database
        var findParams = {};
        findParams["name"] = new RegExp('.*' + req.params.name + '.*', "i");

        parseRequestParams(req, findParams);

        queryDatabase(res, findParams);
    });

    function parseRequestParams(req, findParams) {
        if (req.query.school !== undefined) {
            findParams["school"] = new RegExp('.*' + req.query.school + '.*', "i");
        }

        if (req.query.descriptor !== undefined) {
            findParams["descriptor"] = new RegExp('.*' + req.query.descriptor + '.*', "i");
        }
    }

    function queryDatabase(res, findParams) {
        //console.log(findParams);

        Spell.find(findParams,
            null, { sort: { name: 1 } },
            function(err, spells) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)

                res.json(spells); // return all spells in JSON format
            });
    };
};