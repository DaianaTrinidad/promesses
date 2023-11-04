const {Movies}= require("../database/models");
const Sequelize= require("sequelize");
const dayjs= require("dayjs");

module.exports={
getAllMovies: ()=>{
    return Movies.findAll();
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
getMovieDetail: (id) => {
    return Movies.findByPk(id,{
        include:["genre"],
    }).then((movie) => {
    console.log(movie);
    return{
      id: movie.id,
      title: movie.title,
      rating: movie.rating,
      awards: movie.awards,
      release_date: dayjs(movie.release_date).format("YYYY-MM-DD"),
      genreName: movie.genre?.name??"Sin género",
      length: movie.length,
}});
},
createMovie:(body)=>{
    return Movies.create({
        title: body.title,
        rating: body.rating,
        awards: body.awards,
        release_date: body.awards,
        lenght:body.length,
        genre_id: body.genre_id,

    });
},
updateMovie: (id,body)=>{
    return Movies.update(
        { 
            title: body.title,
            rating: body.rating,
            awards: body.awards,
            release_date: body.awards,
            lenght:body.length,
            genre_id:body.genre_id,

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