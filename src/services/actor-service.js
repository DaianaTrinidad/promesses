const { Actors } = require("../database/models");

module.exports={
    getAllActors:()=>{
       return Actors.findAll();
    },
    getActorsDetail:(id)=>{
        return Actors.findByPk(id);
    },
};