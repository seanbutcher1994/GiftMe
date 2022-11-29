const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const body = req.body
        const newPost = await Post.create({
           // where: req.params.username,
            ...body,
            //user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
             id: req.params.id
            }
        })
        res.render('profile')
        res.status(200).json(deletePost)
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;