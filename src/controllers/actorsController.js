const actorService = require ("../services/actor-service");

module.exports={

    list: (req,res)=>{
      actorService.getAllActors().then((actors)=>{
           res.render("actorsList", {actors})
       });
    },
};