// app/routes/monsters.js

// load the monster model
var Monster = require('../models/monster');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/monster', function(req, res) {

        // use mongoose to get all monsters matching the search term in the database
        var findParams = {};

        if (req.query.env !== undefined) {
            findParams["Environment"] = new RegExp('.*' + req.query.env + '.*', "i");
        }

        if (req.query.cr !== undefined) {
            findParams["CR"] = req.query.cr;
        }

        console.log(findParams);

        Monster.find(findParams,
            null, { sort: { CR: 1, Name: 1 } },
            function(err, monsters) {

                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)

                res.json(monsters); // return all monsters in JSON format
            });
    });

    app.get('/api/monster/:name', function(req, res) {

        // use mongoose to get all monsters matching the search term in the database
        var findParams = {};
        findParams["Name"] = new RegExp('.*' + req.params.name + '.*', "i");

        if (req.query.env !== undefined) {
            console.log("Adding param for env");
            findParams["Environment"] = new RegExp('.*' + req.query.env + '.*', "i");
        }

        if (req.query.cr !== undefined) {
            console.log("Adding param for CR");
            findParams["CR"] = req.query.cr;
        }

        console.log(findParams);

        Monster.find(findParams,
            null, { sort: { CR: 1, Name: 1 } },
            function(err, monsters) {

                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)

                res.json(monsters); // return all monsters in JSON format
            });
    });
};