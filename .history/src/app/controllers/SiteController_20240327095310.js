class SiteController {
    index(req, res) {
        res.json({
            
        });

        // res.render("home");
    }

    search(req, res) {
        res.render("searchs");
    }
}

module.exports = new SiteController();