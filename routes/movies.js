const express = require('express');
const router = express.Router();


const Movie = require("../models/movie.model");
const Celebrity = require("../models/celebrity.model");

router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find();
    res.render("movies/index", {movies});
});


router.get('/movies/new', async (req, res, next) => {
    const celebs = await Celebrity.find();
    res.render("movies/new", {celebs});
  
});

router.post("/movies", async (req, res) => {
    const {title, genre, plot, cast} = req.body;
    await Movie.create({title, genre, plot, cast});
    res.redirect("movies");
})

router.get("/movies/:id", async (req, res) => {
    const movies = await Movie.findById(req.params.id).populate("cast")
    // console.log(movies.cast);
    const celebs = await Celebrity.findById(movies.cast);
    res.render("movies/show",  { movies, celebs});
});


router.post('/movies/:id/delete', async(req, res, next) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
});


router.get('/movies/:id/edit', async (req, res, next) => {
const movie = await Movie.findById(req.params.id).populate("cast");
const celebs = await Celebrity.find();
res.render("movies/edit", {movie, celebs});
});


router.post('/movies/:id', async (req, res, next) => {
    const {title, genre, plot, cast} = req.body;
    await Movie.findByIdAndUpdate(req.params.id, {
        title,
        genre,
        plot,
        cast,
    });
    res.redirect("/movies");
  });



module.exports = router;