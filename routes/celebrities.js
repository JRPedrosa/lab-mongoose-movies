const express = require('express');
const router = express.Router();

//require the Drone model here
const Celebrity = require("../models/celebrity.model");

router.get('/celebrities', async (req, res, next) => {
    const celebs = await Celebrity.find();
    
    res.render("celebrities/index", {celebs});
  
});

router.get("/celebrities/:id", async (req, res) => {
    const celeb = await Celebrity.findById(req.params.id);
    res.render("celebrities/show", celeb);
});


router.get("/newCeleb", (req, res) => {
    res.render("celebrities/new");
});


router.post("/newCeleb", async(req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.create({name, occupation, catchPhrase});
    res.redirect("/celebrities");
});

router.post('/celebrities/:id/delete', async(req, res, next) => {
    await Celebrity.findByIdAndDelete(req.params.id);
    res.redirect("/celebrities");
  });


router.get('/celebrities/:id/edit', async (req, res, next) => {
const celeb = await Celebrity.findById(req.params.id)
res.render("celebrities/edit", celeb);
});

router.post('/celebrities/:id/edit', async (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.findByIdAndUpdate(req.params.id, {
        name,
        occupation,
        catchPhrase,
    });
    res.redirect("/celebrities");
  });


module.exports = router;
