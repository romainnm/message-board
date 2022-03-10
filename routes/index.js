var express = require("express");
var router = express.Router();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const messages = [
  {
    user: "Walt Whitman",
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    added: new Date().toLocaleDateString("en-US", options),
  },
  {
    user: "Jodi Picoul",
    text: "Extraordinary things are always hiding in places people never think to look.",
    added: new Date().toLocaleDateString("en-US", options),
  },
  {
    user: "Tony Robbins",
    text: "Setting goals is the first step in turning the invisible into the visible.",
    added: new Date().toLocaleDateString("en-US", options),
  },
  {
    user: "Oprah Winfrey",
    text: "You can have it all. Just not all at once.",
    added: new Date().toLocaleDateString("en-US", options),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Que du bonheur", messages: messages });
});

/* SET the route for new quotes */
router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    user: req.body.user,
    text: req.body.quote,
    added: new Date().toLocaleDateString("en-US", options),
  });
  res.redirect("/");
});

module.exports = router;
