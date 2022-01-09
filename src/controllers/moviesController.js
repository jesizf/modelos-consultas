const db = require ('../database/models');
const {Op} = require('sequelize');

module.exports={
    list : (req,res) =>{
        db.Movie.findAll()
        .then(movies => {
            /* res.send(movies) */
            return res.render('moviesList',{
                movies
            })
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then(movies => {
                /* res.send(movie) */
                return res.render('moviesDetail',{
                    movies
                })
            })
            .catch(error => console.log(error))
    },
}