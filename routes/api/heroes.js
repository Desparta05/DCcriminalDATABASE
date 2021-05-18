const router = require("express").Router();
const heroesController = require("../../controllers/heroesController");

//Match with "/api/heroes"
router.route("/")
    .get(heroesController.findAll)
    .post(heroesController.create);

//Matches with "/api/heroes/:id"
router
    .route("/:id")
    .get(heroesController.findById)
    .put(heroesController.update);

module.exports = router;
