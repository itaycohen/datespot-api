const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Spot = require('../models/spots');


router.get("/", (req, res, next) => {
    Spot.find()
      .exec()
      .then(docs => {
        console.log(docs);
        //   if (docs.length >= 0) {
        res.status(200).json(docs);
        //   } else {
        //       res.status(404).json({
        //           message: 'No entries found'
        //       });
        //   }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

router.post("/", (req, res, next) => {
    console.log("working")
    const spot = new Spot({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      score: req.body.score
    });
    spot
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /spot",
          createdSpot: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


  router.get("/:spotId", (req, res, next) => {
    const id = req.params.spotId;
    Spot.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });


  router.delete("/:spotId", (req, res, next) => {
    const id = req.params.spotId;
    Spot.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  


  module.exports = router;

