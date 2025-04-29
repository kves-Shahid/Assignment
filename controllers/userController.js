const { MESSAGES } = require('../config/constants');

let users = [];
let nextId = 1;

module.exports = {
  createUser: (req, res) => {
    const user = { id: nextId++, ...req.body };
    users.push(user);
    res.json({ message: MESSAGES.USER_CREATED, user });
  },

  readUser: (req, res) => {
    res.json({ message: MESSAGES.USER_READ });
  },

  updateUser: (req, res) => {
    res.json({ message: MESSAGES.USER_UPDATED });
  },

  deleteUser: (req, res) => {
    res.json({ message: MESSAGES.USER_DELETED });
  },

  getAllUsers: (req, res) => {
    res.json({ message: MESSAGES.ALL_USERS_FETCHED, users });
  },

  getUserById: (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    res.json({ message: MESSAGES.USER_FETCHED_BY_ID, user });
  },

  loginUser: (req, res) => {
    res.json({ message: MESSAGES.LOGIN_SUCCESS });
  },

  logoutUser: (req, res) => {
    res.json({ message: MESSAGES.LOGOUT_SUCCESS });
  },

  changePassword: (req, res) => {
    res.json({ message: MESSAGES.PASSWORD_CHANGED });
  },

  updateProfile: (req, res) => {
    res.json({ message: MESSAGES.PROFILE_UPDATED });
  },

  makeAdmin: (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.map(user => 
      user.id === userId ? { ...user, isAdmin: true } : user
    );
    res.json({ message: MESSAGES.MADE_ADMIN });
  },

  removeAdmin: (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.map(user => 
      user.id === userId ? { ...user, isAdmin: false } : user
    );
    res.json({ message: MESSAGES.REMOVED_ADMIN });
  },

  searchUsers: (req, res) => {
    res.json({ message: MESSAGES.SEARCH_COMPLETED, users: [] });
  },

  filterUsers: (req, res) => {
    res.json({ message: MESSAGES.FILTER_COMPLETED, users: [] });
  },

  blockUser: (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.map(user => 
      user.id === userId ? { ...user, isBlocked: true } : user
    );
    res.json({ message: MESSAGES.USER_BLOCKED });
  },

  unblockUser: (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.map(user => 
      user.id === userId ? { ...user, isBlocked: false } : user
    );
    res.json({ message: MESSAGES.USER_UNBLOCKED });
  },

  verifyEmail: (req, res) => {
    res.json({ message: MESSAGES.EMAIL_VERIFIED });
  },

  resendVerification: (req, res) => {
    res.json({ message: MESSAGES.VERIFICATION_EMAIL_RESENT });
  },

  uploadProfilePicture: (req, res) => {
    res.json({ message: MESSAGES.PROFILE_PIC_UPLOADED });
  },

  deleteAccount: (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: MESSAGES.ACCOUNT_DELETED });
  }
};