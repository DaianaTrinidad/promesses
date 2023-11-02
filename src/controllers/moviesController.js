const movies = require("../database/models/movies");
const movieService= require("../services/movie-service");

module.exports={
    list: (req, res) => {
        movieService.getAllMovies().then((movies) => {
          res.render("moviesList", { movies });
        });
      },
    detail: (req,res)=>{
     movieService.getMovieDetail(req.params.id).then((movies)=>{
       res.render("moviesDetail",{movies});
     });
      },
      new: (req,res)=>{
        movieService.getNewestMovies().then((movies)=>{
          res.render("newestMovies",{movies});
        });
      },
    };