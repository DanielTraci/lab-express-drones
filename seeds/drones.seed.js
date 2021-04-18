// Iteration #1

// Establish a connection to the database
require('../db')

// Create an array of 3 objects, each with name, propellers and maxSpeed
const mydrones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

// Insert drone items to the DB
  const mongoose = require('mongoose');
  const Drone = require ('../models/Drone.model.js')

// Call the Drone model's .create() method with the array as an argument.
  Drone.create(mydrones)
  .then(()=>{
      console.log('All good', mydrones)
      // Close connection with the database
      mongoose.connection.close()
  })
  .catch(()=>{
      console.log('Error')
  })
