const router = require('express').Router();
// const path = require('path');
const { Post, User } = require('../models');
router.get('/:username', async (req, res) => {
    try {
        const userData = await Post.findAll(req.params.user_id, {
            include: [{ model: User }],
        });
        const user = userData.get({ plain: true });
        res.render('profile', user);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;