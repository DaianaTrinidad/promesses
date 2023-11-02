const {Actors} = require("../database/models");
module.exports={
    getAllActors: ()=>{
       return Actors.findAll();
    },
};