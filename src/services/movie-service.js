const {Movies}= require("../database/models");
const Sequelize= require("sequelize");

module.exports={
getAllMovies: ()=>{
    return Movies.findAll();
},
getMovieDetail: (id) =>{
   return Movies.findByPk(id);
},
getNewestMovies:()=>{
    return Movies.findAll({
        order: [["release_date","DESC"]],
        limit:5,
    });
},
getRecomendedMovies: ()=>{
    return Movies.findAll({
        where:{
            rating:{[Sequelize.Op.gte]:8}
        }
    });
},
createMovie:(body)=>{
    return Movies.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.awards,
        lenght:req.body.length,
        genre_id: req.body.genre_id,

    });
},
updateMovie: (id,body)=>{
    return Movies.update(
        { 
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.awards,
            lenght:req.body.length,
            genre_id: req.body.genre_id,

        },
        
        {
            where:{id:id},
          }
    );
    },
    moviesDelete:(id)=>{
        return Movies.destroy({
            where:{id:id},
        });
      },
    };