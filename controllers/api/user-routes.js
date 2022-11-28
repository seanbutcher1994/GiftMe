const router = require("express").Router();
const { User } = require("../../models");

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;





















































































// router.post("/", (req, res) => {
//   User.create({
//     username: req.body.username,
//     password: req.body.password
//   })
//   .then(dbUserData => {
//     req.session.save(() => {
//       req.session.userId = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;

//       res.json(dbUserData);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// router.post("/login", (req, res) => {
//   User.findOne({
//     where: {
//       username: req.body.username
//     }
//   }).then(dbUserData => {
//     if (!dbUserData) {
//       res.status(400).json({ message: 'No user account found!' });
//       return;
//     }

//     const validPassword = dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect password!' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.userId = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;
  
//       res.json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   });
// });

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   }
//   else {
//     res.status(404).end();
//   }
// });

// router.delete("/id", (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(dbUserData => {
//     if (!dbUserData) {
//       res.status(404).json({ message: 'No user found with this id' });
//       return;
//     }
//     res.json(dbUserData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// module.exports = router;