class ContactController {
  //* GET /contact
  index(req, res) {
    res.render("contact");
  }

    //* GET /contact with friends
    index(req, res) {
      res.send("add friends");
    }
}

module.exports = new ContactController();
