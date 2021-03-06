const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book Routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

// Everything else
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;