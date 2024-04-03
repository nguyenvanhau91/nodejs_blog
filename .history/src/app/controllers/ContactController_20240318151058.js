class ContactController {
    home(req, res) {
        res.render("contact");
    }
}

module.exports = new ContactController();