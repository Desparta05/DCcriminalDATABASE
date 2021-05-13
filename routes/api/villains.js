const router = require("express").Router();
const villainsController = require("../../controllers/villainsController");

//Match with "/api/villains"
router.route("/")
    .get(villainsController.findAll)
    .post(villainsController.create);

//Matches with "/api/villains/:id"
router
    .route("/:id")
    .get(villainsController.findById)
    .put(villainsController.update);

module.exports = router;
