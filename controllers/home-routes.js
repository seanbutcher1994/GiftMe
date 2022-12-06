const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  // Post.findAll({
  //   include: [User],
  // })
  //   .then((dbPostData) => {
  //     const posts = dbPostData.map((post) => post.get({ plain: true }));

  //     res.render("login", {posts, logged_in: req.session.logged_in});
  //   })
  //   .catch((err) => {
  //     res.status(500).json(err);
  //   });
  res.status(200);
});

router.get("/feed", async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{
        model: User
      }]
    });
    const users = userData.map((user) => user.get({ plain:true }));
    console.log(users);
    res.render('feed', {users});
    //res.status(200).json(users);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
  // User.findAll({
  //   attributes: { exclude: ['password']},
  //   include: [{ model: Post }]
  // })
  // .then((dbUserData) => {
  //   const users = dbUserData.map((user) => user.get({plain:true}));

  //   res.render("feed", {users});
  //   console.log(users)
  // })
  // .catch((err) => {
  //   res.status(500).json(err);
  // });
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/feed");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/feed");
    return;
  }

  res.render("signup");
});

router.get('/:username', async (req, res) => {
  try {
      const userData = await User.findOne({
          // where: {
          //     username: req.params.username
          // },
          include: [{ model: Post }],
      });
      res.render('profile', userData);
  } catch (err) {
      console.log(err)
      res.status(500).json(err);
  }
})


module.exports = router;

//logged_in: req.session.logged_in