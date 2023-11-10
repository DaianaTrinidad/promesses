module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      //alias de la tabla
      "Movies",
      {
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
      },
      {
        tableName: "movies",
        createdAt: "created_at",
        updatedAt: "updated_at",
      });
      //es lo que retorna el Model de arriba 
      //el modelo movies pertenece a los generos
      Model.associate = (db) => {
        Model.belongsTo(db.Genres, {
          //alias de la relacion
          as: "genre",
          foreignKey: "genre_id",
        });
        Model.belongsToMany(db.Actors, {
          as: "actors",
          through: "actor_movie",
          foreignKey: "movie_id",
          otherKey: "actor_id",
          timestamps: false,
        });
    
        Model.hasOne(db.Actors, {
          as: "favorite_movie",
          foreignKey: "favorite_movie_id",
        });
      };
    
      return Model;
    };