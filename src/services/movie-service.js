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
};