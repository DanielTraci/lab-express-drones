const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

// Iteration #2: List the drones
router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((allDrones) => {
    res.render('drones/list.hbs', {allDrones})
  })
  .catch((err) => {
    console.log("Failed to display drones")
  });
});


// Iteration #3: Add a new drone
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  //const {id}=req.params
  const {name, propellers, maxSpeed} = req.body
  Drone.create({name, propellers, maxSpeed})
  .then ((data) => {
    res.redirect('/drones')
  })
  .catch((err) => {
    res.render('drones/create-form.hbs')
  })
});

// Iteration #4: Update the drone
router.get('/drones/:id/edit', (req, res, next) => {
    //res.render('drones/update-form.hbs')
    const { id } = req.params
    Drone.findById(id)
    .then( (data) => {
    res.render('drones/update-form.hbs', {data})
    })
    .catch( (err) => console.log(err));
  })

router.post('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
    .then( (data) => {
      res.redirect('/drones')
    })
    .catch( (err) => console.log(err));
  })

  // Iteration #5: Delete the drone
router.post('/drones/:id/delete', (req, res, next) => {
  const {id}= req.params
  Drone.findByIdAndDelete(id)
  .then(()=>res.redirect('/drones'))
  .catch((err)=>console.log(err))
});

module.exports = router;
