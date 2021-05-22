const router = require ("express").Router();
const villainRoutes = require("./villains");
const heroRoutes = require("./heroes");
const userRoutes = require("./users")

// Villain routes
router.use("/villains", villainRoutes);

// Hero routes
router.use("/heroes", heroRoutes);

// User routes
router.use("/users", userRoutes)

module.exports = router;