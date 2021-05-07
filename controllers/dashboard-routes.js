// routes for user dashboard
const router = require('express').Router();
const sequelize= require('../config/connection');
const { Owner, Vehicle, MaintLog } = require('../models');

router.get('/', (req, res) => {
    Vehicle.findAll({
        where: {
            owner_id: req.session.owner_id
        },
        attributes: [
                  'id',
                  'make',
                  'model',
                  'year',
                  'created_at'
                    ],
                    include: [
                        {
                            model: MaintLog,
                            attributes: ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id']
                        }
                    ] 
    }).then(dbVehicleData => {
        const vehicle = dbVehicleData.map(vehicle => vehicle.get({plain: true}));
        res.render('dashboard',{vehicle, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

/*outer.get('/', (req, res) => {
    MaintLog.findAll({
      
        attributes:  ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id']
    }).then( dbMaintData => {
        const maintlog = dbMaintData.map(maintlog => maintlog.get({plain: true}))
        res.render('dashboard', {maintlog, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})*/

module.exports = router;




