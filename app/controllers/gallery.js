module.exports = {
    getGallery: function(req, res) {
        res.render('gallery', {
            user: req.isAuthenticated() ? req.user : null
        });
    }
};