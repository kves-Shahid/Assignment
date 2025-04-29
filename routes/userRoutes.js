const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, isAdmin } = require('../middlewares/dummyAuth');

router.post("/create-user", userController.createUser);
router.get("/read-user", authenticate, userController.readUser);
router.put("/update-user", authenticate, userController.updateUser);
router.delete("/delete-user", authenticate, userController.deleteUser);

router.get("/all-users", authenticate, isAdmin, userController.getAllUsers);
router.get("/user/:id", authenticate, userController.getUserById);

router.post("/login", userController.loginUser);
router.post("/logout", authenticate, userController.logoutUser);

router.put("/change-password", authenticate, userController.changePassword);
router.put("/update-profile", authenticate, userController.updateProfile);

router.put("/make-admin/:id", authenticate, isAdmin, userController.makeAdmin);
router.put("/remove-admin/:id", authenticate, isAdmin, userController.removeAdmin);

router.get("/search", authenticate, userController.searchUsers);
router.get("/filter", authenticate, userController.filterUsers);

router.patch("/block-user/:id", authenticate, isAdmin, userController.blockUser);
router.patch("/unblock-user/:id", authenticate, isAdmin, userController.unblockUser);

router.post("/verify-email", userController.verifyEmail);
router.post("/resend-verification", userController.resendVerification);

router.post("/upload-profile-picture", authenticate, userController.uploadProfilePicture);

router.delete("/delete-account", authenticate, userController.deleteAccount);

module.exports = router;