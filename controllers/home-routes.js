const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("login", {posts, logged_in: req.session.logged_in});
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/feed", async (req, res) => {
  User.findAll({
    include: [Post],
  })
  .then((dbUserData) => {
    const users = dbUserData.map((user) => user.get({plain:true}));

    res.render("feed", {users});
  })
  .catch((err) => {
    res.status(500).json(err);
  });
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
          where: {
              username: req.params.username
          },
          include: [{ model: Post }],
      });
      res.render('theirwishlist', userData);
  } catch (err) {
      console.log(err)
      res.status(500).json(err);
  }
})


module.exports = router;

//logged_in: req.session.logged_in