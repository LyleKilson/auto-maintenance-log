// routes for homepage
const router = require("express").Router();
const sequelize = require("../config/connection");
const { Owner, Vehicle, MaintLog } = require("../models");

<<<<<<< HEAD


router.get('/', (req, res) => {
  res.render('homepage');
})
=======
router.get("/", (req, res) => {
  res.render("homepage");
});
>>>>>>> 7771c66d13c22db4416a9706c5218d2d54af73eb

router.get('/login', (req, res) => {
if(req.session.loggedIn) {
  res.redirect('/');
  return;
}
res.render('login');

});

  router.get('/signup', (req, res) => {
res.render('signup')
  });
module.exports = router;

