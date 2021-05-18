const router = require ("express").Router();
const villainRoutes = require("./villains");
const heroRoutes = require("./heroes");

// Villain routes
router.use("/villains", villainRoutes);

// Hero routes
router.use("/heroes", heroRoutes);

module.exports = router;