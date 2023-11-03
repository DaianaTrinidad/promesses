const movieService= require("../services/movie-service");

module.exports={
    list: (req, res) => {
        movieService.getAllMovies().then((movies) => {
          res.render("moviesList", { movies });
        });
      },
    detail: (req,res)=>{
     movieService.getMovieDetail(req.params.id).then((movie)=>{
       res.render("moviesDetail",{movie});
     });
      },
      new: (req,res)=>{
        movieService.getNewestMovies().then((movies)=>{
          res.render("newestMovies",{movies});
        });
      },
      recomended: (req,res)=>{
        movieService.getRecomendedMovies().then((movies)=>{
          res.render("recommendedMovies",{movies});
        });
      },
      add: (req,res)=>{
          res.render("moviesAdd");
        ;
      },
      create: (req,res)=>{
        movieService.createMovie(req.body).then((movie)=>{
          res.redirect("movies/detail/" + movie.id);
        });
      },
      edit:(req,res)=>{
      movieService.getMovieDetail(req.params.id).then((movie)=>{
        res.render("moviesEdit", {movie})
      });
      },
      update: (req,res)=>{
        movieService.update(req.params.id,req.body).then((movie)=>{
          res.redirect("/movies/detail/" + req.params.id);
        });
      },
      confirmDelete:(req,res)=>{
        movieService.getMovieDetail(req.params.id).then((movie)=>{
        res.render("moviesDelete",{movie});
        
      });
    },
      delete: (req,res)=>{
        movieService.moviesDelete(req.params.id).then(()=>{
        res.redirect("/movies");
        });
      },
    };