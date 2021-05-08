// routes for maintenance log?

const router = require('express').Router();
const {Owner, Vehicle, MaintLog} = require('../../models');

router.get('/' ,(req, res) => {
 MaintLog.findAll({
     attributes: ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id']
 })
 .then(dbMaintData => res.json(dbMaintData))
 .catch(err => {
     console.log(err);
     res.status(500).json(err)
  });
});



router.post('/', (req, res) => {
    console.log(req.body)
    if(req.session) { 
    MaintLog.create({
        last_oil_change: req.body.oil,
        last_tire_rotation: req.body.tire,
        last_spark_plugs: req.body.plugz,
        last_air_filter: req.body.filter,
        notes: req.body.notes,
        vehicle_id: req.session.vehicle_id,
        owner_id: req.session.owner_id

    })
    .then(newMaintLog => res.json(newMaintLog))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
   }
});

router.delete('/:id',  (req, res) => {
    MaintLog.destroy({
        where: {
            id: req.params.id 
        }
    })
    .then(dbMaintData => {
        if (!dbMaintData) {
            res.status(404).json({message: 'no log with that id'})
            return;
        }
        res.json(dbMaintData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;