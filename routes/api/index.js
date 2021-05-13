const router = require ("express").Router();
const villainRoutes = require("./villains");

// Villain routes
router.use("/villains", villainRoutes);

module.exports = router;