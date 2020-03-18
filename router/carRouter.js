const express = require('express');
//const db = require()

const router = express.Router();


router.get('/', (req, res) => {
    db("cars")
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({
                message: "Sorry, ran into error retrieving  cars"
            });
        });

})


router.post('/', (req, res) => {

    db("cars")
        .insert(req.body, "id")
        .then(ids => {
            db("cars")
                .where({
                    id: ids[0]
                })
                .then(newCar => {
                    res.status(201).json(newCar);
                });

        })

})
router.get('/:id', (req, res) => {

    db("cars")
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({
                message: "sorry, can't  retrieve cars"
            });
        });
})

module.exports = router;
