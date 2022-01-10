const db = require("../database/models");
module.exports = {
  list: (req, res) => {
    db.Genre.findAll()
      .then((genres) => {
        //res.send(actors)
        return res.render("genresList", {
          genres,
        });
      })
      .catch((error) => console.log(error));
  },}