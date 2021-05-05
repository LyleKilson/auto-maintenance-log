// routes for a vehicle owner?
const router = require('express').Router();
const {Owner, Vehicle, MaintLog} = require('../../models');

router.get('/', (req, res) => {
    Owner.findAll({})
    .then(ownerData => res.json(ownerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;